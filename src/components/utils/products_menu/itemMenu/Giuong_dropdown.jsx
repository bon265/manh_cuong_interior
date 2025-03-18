import { Link } from 'react-router-dom';
const Giuongdropdown = ({item2}) => {
    const menuItems =[
        {
            path: '/',
            name:'giường ngủ công nghiệp'
        },
        {
            path: '/',
            name:'giường ngủ gỗ tự nhiên'
        },
        {
            path: '/',
            name:'giường bay'
        },
        {
            path: '/',
            name:'giường thông minh'
        },
    ]
    return (
             <menu>
                <ul  className={item2}>
                   {menuItems.map((item ,index) =>{
                    return <li key={index}><Link to={item.path}>{item.name}</Link></li>
                   })
                 }
                </ul>
            </menu>
    );
};

export default Giuongdropdown;