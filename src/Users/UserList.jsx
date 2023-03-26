import React, {useState, useEffect, useCallback} from 'react';
import Card from '../UI/Card';

export default function UserList(){

    const [userData, setUserData] = useState([])

    const getDataHandler = useCallback( async () => {
        const res = await fetch('https://test-2827d-default-rtdb.firebaseio.com/moja.json')
        
        const data = await res.json()
  
        const loadedData = []
        for(const key in data){
          loadedData.push({
            key: key,
            name : data[key].name,
            mail : data[key].mail,
            age : data[key].age
          })
        }

        setUserData(loadedData)
    }
    )
  
    useEffect( () => {
      getDataHandler()
     }, [getDataHandler])
    return (
        <>
            <Card >
                {
                <ul>
                    {
                        userData.map(user => {
                            return <li key={user.key}>
                                Name: {user.name} <text><br></br></text>
                                Wiek: {user.age} years old<text><br></br></text>
                                Mail: {user.mail}
                            </li> ;
                        })
                    }
                </ul>
                }
               
            </Card>
        
        </>
    )
}