import { useSelector, useDispatch } from 'react-redux';
import { List, Item, Name, DeleteBtn, Avatar } from './ListContact.styled';
import { deleteContact } from 'redux/contacts/operations';
import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { AvatarGenerator } from 'random-avatar-generator';
import { BiTrash } from 'react-icons/bi';

const generator = new AvatarGenerator();

export const ListContacts = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);
    const query = useSelector(selectFilter);
    function getvisiableTodos() {
        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(query.toLowerCase())
        );
    }
    const visiableTodos = getvisiableTodos();
    return (
        <div>
            <List>
                {visiableTodos.map(({ id, name, number }) => (
                    <Item key={id}>
                        <div>
                            {' '}
                            <Avatar
                                src={generator.generateRandomAvatar(id)}
                                alt=""
                            />
                            <Name>{name}</Name>
                            <p>{number}</p>
                        </div>
                        <DeleteBtn
                            id={id}
                            onClick={e => {
                                dispatch(deleteContact(id));
                            }}
                        >
                            <BiTrash />
                        </DeleteBtn>
                    </Item>
                ))}
            </List>
        </div>
    );
};