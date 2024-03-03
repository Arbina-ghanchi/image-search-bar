import styled from 'styled-components';

export const Container = styled.div`
 width:100% ;
 max-width: 1450px;
 display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   margin: 0 auto;
`


export const Searchbarinput = styled.input`
 border: 1px solid #000;
    outline: none;
    width: 100%;
    max-width: 200px;
`
export const Mainbox = styled.div`
display: flex;
gap: 12px;
align-items: center;
`
export const SimpleButton = styled.button`
  background-color: #007bff;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
margin: 30px 6px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Imagecontainer = styled.div`
img{width:400px;
height:400px;
margin: 20px;
padding: 20px;

}
`
