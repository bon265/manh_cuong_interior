import { Link } from "react-router-dom";
const Tuao = ({item3}) => {
    const menuItems =[
        {
            path: '/',
            name:'tủ gỗ công nghiệp'
        },
        {
            path: '/',
            name:'tủ gỗ tự nhiên'
        },
        {
            path: '/',
            name:'tủ gỗ cánh kính'
        }
    ]
    return (
             <menu>
                <ul  className={item3}>
                   {menuItems.map((item ,index) =>{
                    return <li key={index}><Link to={item.path}>{item.name}</Link></li>
                   })
                 }
                </ul>
            </menu>
    );
};

export default Tuao;