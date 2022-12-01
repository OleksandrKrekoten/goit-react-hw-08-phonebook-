import { Navigation } from 'components/Navigation/Navigation';
import {  Header} from './AppBar.styled';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
export const AppBar = () => {
    const { isLoggedIn } = useAuth();
    return (
        <Header>
            <Navigation/>
            {isLoggedIn ? <UserMenu /> : <AuthNav />}    
            
           
        </Header>
    );
};