import {useState} from 'react'
import FormInput from './FormInput';
import Button from './Button';

const Formbox : React.FC = () => {


    // 1. สร้าง State สำหรับเก็บข้อมูล Todo ใหม่
    const [todo, setTodo] = useState({
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      priority: "medium",
    });

      const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("ส่งข้อมูล Todo ไป Backend:", todo);
    // TODO: เรียกใช้ todoService.createTodo(todo)
  };

  return (
    <div><h3>Add New Task</h3>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Task Title"
            type="text"
            value={todo.title}
            placeholder="What needs to be done?"
            onChange={(val) => setTodo({ ...todo, title: val })}
          />
          
          <FormInput
            label="Description"
            type="text"
            value={todo.description}
            placeholder="More details..."
            onChange={(val) => setTodo({ ...todo, description: val })}
          />

          <div style={{ display: 'flex', gap: '10px' }}>
            <FormInput
              label="Start Date"
              type="date"
              value={todo.startDate}
              onChange={(val) => setTodo({ ...todo, startDate: val })}
            />
            <FormInput
              label="End Date"
              type="date"
              value={todo.endDate}
              onChange={(val) => setTodo({ ...todo, endDate: val })}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Priority:</label>
            <select 
              value={todo.priority}
              onChange={(e) => setTodo({ ...todo, priority: e.target.value })}
              style={{ width: '100%', padding: '10px', borderRadius: '4px' }}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <Button label="Add Task" variant="primary" />
        </form></div>
  )
}

export default Formbox