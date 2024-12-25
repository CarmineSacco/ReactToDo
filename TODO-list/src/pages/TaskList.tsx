import { useParams } from "react-router-dom";

const TaskList = () => {
  const { id_utente } = useParams();

  return <div>TaskList</div>;
};

export default TaskList;
