import { useRouter } from 'next/router';
import useSWR from 'swr';
import Form from '../../components/Form';

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditPet = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: climb, error } = useSWR(
    id ? `/api/climbs/${id}` : null,
    fetcher
  );

  if (error) return <p>Failed to load</p>;
  if (!climb) return <p>Loading...</p>;

  const climbForm = {
    name: climb.name,
    sent: climb.sent,
    grade: climb.grade,
    notes: climb.notes,
  };

  return (
    <Form formId='edit-climb-form' climbForm={climbForm} forNewClimb={false} />
  );
};

export default EditPet;
