// import {
//     List,
//     Datagrid,
//     TextField,
//     EmailField,
//     UrlField,
//     Edit,
//     SimpleForm,
//     TextInput,
//     Create,
//   } from 'react-admin';
   
//   export const UserList = props => (
//     <List {...props}>
//       <Datagrid rowClick="edit">
//         <TextField source="id" />
//         <TextField source="name" />
//         <TextField source="username" />
//         <EmailField source="email" />
//         <TextField source="address.street" label="Address" />
//         <TextField source="phone" />
      
//       </Datagrid>
//     </List>
//   );
   
//   export const UserEdit = props => (
//     <Edit {...props}>
//       <SimpleForm>
//         <TextInput source="id" disabled />
//         <TextInput source="name" />
//         <TextInput source="username" />
//         <TextInput source="email" />
//         <TextInput source="address.street" label="Address" />
//         <TextInput source="phone" />
    
//       </SimpleForm>
//     </Edit>
//   );
   
//   export const UserCreate = props => (
//     <Create {...props}>
//       <SimpleForm>
//         <TextInput source="name" />
//         <TextInput source="username" />
//         <TextInput source="email" />
//         <TextInput source="address.street" label="Address" />
//         <TextInput source="phone" />
       
        
//       </SimpleForm>
//     </Create>
//   );