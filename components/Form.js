import { useState } from 'react';
import { useRouter } from 'next/router';
import { mutate } from 'swr';

const Form = ({ formId, climbForm, forNewClimb = true }) => {
  const router = useRouter();
  const contentType = 'application/json';
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const [form, setForm] = useState({
    name: climbForm.name,
    sent: climbForm.sent,
    grade: climbForm.grade,
    notes: climbForm.notes,
  });

  /* The PUT method edits an existing entry in the mongodb database. */
  const putData = async (form) => {
    const { id } = router.query;

    try {
      const res = await fetch(`/api/climbs/${id}`, {
        method: 'PUT',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      const { data } = await res.json();

      mutate(`/api/climbs/${id}`, data, false); // Update the local data without a revalidation
      router.push('/');
    } catch (error) {
      setMessage('Failed to update climb');
    }
  };

  /* The POST method adds a new entry in the mongodb database. */
  const postData = async (form) => {
    try {
      const res = await fetch('/api/climbs', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      });

      // Throw error with status code in case Fetch API req failed
      if (!res.ok) {
        throw new Error(res.status);
      }

      router.push('/');
    } catch (error) {
      setMessage('Failed to add climb');
    }
  };

  const handleChange = (e) => {
    const target = e.target;
    const value = target.name === 'sent' ? target.checked : target.value;
    const name = target.name;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = formValidate();
    if (Object.keys(errs).length === 0) {
      forNewClimb ? postData(form) : putData(form);
    } else {
      setErrors({ errs });
    }
  };

  /* Makes sure climb info is filled for climb name and grade */
  const formValidate = () => {
    let err = {};
    if (!form.name) err.name = 'Name is required';
    if (!form.grade) err.grade = 'Grade is required';
    return err;
  };

  return (
    <>
      <form id={formId} onSubmit={handleSubmit}>
        <label htmlFor='name'>Climb Name</label>
        <input
          type='text'
          maxLength='200'
          name='name'
          value={form.name}
          onChange={handleChange}
          required
        />

        <label htmlFor='grade'>Grade</label>
        <input
          type='number'
          min='0'
          max='20'
          name='grade'
          value={form.grade}
          onChange={handleChange}
          required
        />

        <label htmlFor='sent'>Sent</label>
        <input
          type='checkbox'
          name='sent'
          checked={form.sent}
          onChange={handleChange}
        />

        <label htmlFor='notes'>Notes</label>
        <textarea
          name='notes'
          maxLength='360'
          value={form.notes}
          onChange={handleChange}
        />

        <button type='submit' className='btn'>
          Submit
        </button>
      </form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </>
  );
};

export default Form;
