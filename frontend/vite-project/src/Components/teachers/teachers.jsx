import './teachers.css'

const Teachers = () => {
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
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Teachers