import { Link, useParams } from "react-router-dom";
import placeholderImage from "../assets/placeholder.png";
import studentsData from "../assets/students.json";

function StudentDetailsPage() {
  const { studentId } = useParams();

  const studentProfile = studentsData.find(
    (student) => student._id === studentId
  );

  if (!studentProfile) {
    return (
      <div className="border-2 border-red-500 m-4 p-4">
        <h1>Student not found</h1>
        <Link to="/">
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Back to Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 py-6 px-4 border-2 border-fuchsia-500 m-2">
      <h1>Student Details Page</h1>

      <div className="bg-white p-8 rounded-lg shadow-md mb-6 relative">
        <img
          src={studentProfile.image || placeholderImage}
          alt="profile"
          className="rounded-full w-32 h-32 object-cover border-2 border-gray-300"
        />

        <h1 className="text-2xl mt-4 font-bold">
          {studentProfile.firstName} {studentProfile.lastName}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 mb-4 border-b pb-4">
          <p><strong>Email:</strong> {studentProfile.email}</p>
          <p><strong>Program:</strong> {studentProfile.program}</p>
          <p><strong>Phone:</strong> {studentProfile.phone}</p>
          <p><strong>Cohort:</strong> {studentProfile.cohort}</p>
        </div>

        <Link to="/">
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default StudentDetailsPage;
