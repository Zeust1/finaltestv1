import { useState, useEffect } from 'react'
import './teachers.css'

const Teachers = () => {
    const [teachers, setTeachers] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchTeachersApi = async () => {
            try {
                const res = await fetch('http://localhost:8080/api/v1/teachers')
                const data = await res.json()
                setTeachers(data.data.listTeachers)
            } catch (error) {
                console.log("fetch data fail")
            }finally{
            setLoading(false)
        }
    }
    fetchTeachersApi()
    },[])

    console.log(teachers)
    return(
        <div className='teachers-table'>
            <table>
                <thead>
                    <tr>
                        <td>Mã</td>
                        <td>Giáo viên</td>
                        <td>Trình độ (cao nhất)</td>
                        <td>Bộ môn</td>
                        <td>TT Công tác</td>
                        <td>Địa chỉ</td>
                        <td>Trạng thái</td>
                        <td>Hành động</td>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((teacher) => (
                        <tr>
                            <td>{teacher.code}</td>
                            <td>...</td>
                            <td>
                                <p>Bậc: {teacher.degrees[0].type}</p>
                                <p>Chuyên ngành: {teacher.degrees[0].major}</p>
                            </td>
                            <td>N/A</td>
                            <td>{teacher.teacherPositionsId}</td>
                            <td>{teacher.code}</td>
                            <td>{teacher.code}</td>
                            <td>{teacher.code}</td>
                            <td>{teacher.code}</td>
                            <td>{teacher.code}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Teachers