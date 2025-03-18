import { Link } from 'react-router-dom';

const Banghe_dropdown = ({item1}) => {
 const menuItems=[
        {
            path:'/',
            name:'sofa da'
        },
        {
            path:'/',
            name:'bàn ăn hiện đại'
        },
        {
            path:'/',
            name:'sofa da'
        }
    ]
    return (
            <menu>
                <ul  className={item1}>
                {menuItems.map((item ,index) =>{
                    return <li key={index}><Link to={item.path}>{item.name}</Link></li>
                   })
                 }
                </ul>
            </menu>
        
    );
};

export default Banghe_dropdown;