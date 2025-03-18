import { Link } from "react-router-dom";

const Banphan = ({item4}) => {
    const menuItems =[
        {
            path: '/',
            name:'bàn phấn gỗ công nghiệp'
        },
        {
            path: '/',
            name:'bàn phấn gỗ tự nhiên'
        },
        {
            path: '/',
            name:'bàn phấn hiện đại'
        }
    ]
    return (
             <menu>
                <ul  className={item4}>
                   {menuItems.map((item ,index) =>{
                    return <li key={index}><Link to={item.path}>{item.name}</Link></li>
                   })
                 }
                </ul>
            </menu>
    );
};

export default Banphan;