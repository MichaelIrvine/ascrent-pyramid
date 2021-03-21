import Link from 'next/link';
import dbConnect from '../utils/dbConnect';
import Climb from '../models/Climb';
import PyramidItems from '../components/PyramidItems';

const Index = ({ climbs }) => {
  const grades = climbs
    .map((climb) => climb.grade)
    .filter((value, index, self) => self.indexOf(value) === index);

  return (
    <div className='grid _2x'>
      <div>
        <PyramidItems climbs={climbs} />
      </div>
      <div className='climbs-list__wrapper'>
        <ul>
          {grades
            .sort((a, b) => b - a)
            .map((grade, i) => {
              const vGrade = grade;
              return (
                <li key={i}>
                  <h2>v{grade}</h2>
                  <ul>
                    {climbs
                      .filter((climb) => climb.grade === vGrade)
                      .map((filteredClimb, i) => (
                        <li
                          id={filteredClimb._id}
                          key={i}
                          data-status={
                            filteredClimb.sent ? 'sent' : 'unclimbed'
                          }
                        >
                          <Link
                            href='/[id]/edit'
                            as={`/${filteredClimb._id}/edit`}
                          >
                            {filteredClimb.name}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

/* Retrieves climb(s) data from mongodb database */
/* Will get all climbs from DB */
export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */
  const result = await Climb.find({});
  const climbs = result.map((doc) => {
    const climb = doc.toObject();
    climb._id = climb._id.toString();
    return climb;
  });

  // get the grades to pass in props
  const grades = climbs.filter((climb) => {
    return climb.grade;
  });

  console.log(grades);
  console.log(climbs);
  return { props: { climbs: climbs } };
}

export default Index;
