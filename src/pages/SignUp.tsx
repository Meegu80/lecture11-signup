import styled from "styled-components";

const Wrapper = styled.div`
    width: 100vw;
    height: 100dvh;
    
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
`;
const Card = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 350px;
    padding: 40px 32px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
`;
const Title = styled.h1`
    font-size: 26px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 24px;
    margin-top: 0;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    padding: 14px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #ddd;
    font-size: 16px;

    &:focus {
        outline: none;
        border-color: #6c5ce7;
    }
`
const ErrorText = styled.span`
    color: #a94442;
    margin-top: 4px;
    font-size: 12px;
`
const Button = styled.button`
    padding: 1px;
    background-color: #fff;
    color: #00432d;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;font-weight: 600;

    &:hover {
        background-color: #574b3d;
    }
`

function SignUp() {
    return (
        <Wrapper>
            <Card>
                <Title>회원가입</Title>
                <Form>
                    <InputGroup>
                        <Input placeholder={"아이디"}/>
                        <ErrorText>에러메시지</ErrorText>
                    </InputGroup>
                    <InputGroup>
                        <Input type={"password"} placeholder={"비밀번호"}/>
                        <ErrorText>에러메시지</ErrorText>
                    </InputGroup>
                    <InputGroup>
                        <Input placeholder={"이름"}/>
                        <ErrorText>에러메시지</ErrorText>
                    </InputGroup>
                    <InputGroup>
                        <Input placeholder={"이메일"}/>
                        <ErrorText>에러메시지</ErrorText>
                    </InputGroup>
                    <Button>회원가입</Button>
                </Form>
            </Card>
        </Wrapper>
    );
}

export default SignUp;
