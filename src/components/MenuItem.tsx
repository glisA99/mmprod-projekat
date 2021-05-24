import React from 'react'
import { Link, RouteComponentProps, useHistory, withRouter } from 'react-router-dom';
import { Icon, Menu, SemanticICONS } from 'semantic-ui-react'

interface IProps {
    text: string,
    icon: SemanticICONS,
    to: string
}

const MenuItem = withRouter((props:RouteComponentProps & IProps) => {

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();
        props.history.replace(`${props.to}`);
    }

    return (
        <Menu.Item style={{width: "10%", height: "100%"}} className='menuItem' onClick={handleClick}>
            <Icon name={props.icon} size='large' />
            <p className='menuItemTitle'>{props.text}</p>
        </Menu.Item>
    )
});

export default MenuItem;