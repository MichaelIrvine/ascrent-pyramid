import Form from '../components/Form';

const NewClimb = () => {
  const climbForm = {
    name: '',
    sent: false,
    grade: '',
    notes: '',
  };

  return <Form formId='add-climb-form' climbForm={climbForm} />;
};

export default NewClimb;
