import styled from "styled-components";
import {type FormEvent, useState} from "react";
import {useNavigate} from "react-router";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
`;

export const Card = styled.div`
    width: 100%;
    max-width: 350px;
    padding: 40px 32px;
    box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
`;

export const Title = styled.h1`
    font-size: 26px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 24px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    padding: 14px;
    box-sizing: border-box;
    border-radius: 10px;
    border: 1px solid #dddddd;
    font-size: 16px;

    &:focus {
        outline: none;
        border-color: #6c5ce7;
    }
`;

const ErrorText = styled.span`
    color: #d63031;
    font-size: 12px;
    margin-top: 4px;
`;

const Button = styled.button`
    padding: 14px;
    background-color: #6c5ce7;
    color: #ffffff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;

    &:hover {
        background-color: #574bd6;
    }
`;

type ErrorType = {
    [key: string]: string;
}

function SignUp() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");


    const [errors, setErrors] = useState<ErrorType>({});

    const validate = () => {
        const newErrors: ErrorType = {};
        if (!username) {
            newErrors.username = "아이디를 입력해주세요."
        }
        if (!password) {
            newErrors.password = "비밀번호를 입력해주세요"
        } else if (password.length < 6) {
            newErrors.password = "비밀번호는 최소 6자 이상이어야 합니다. ";
        }
        if (!name) {
            newErrors.name = "이름을 입력해주세요";
        }
        if (!email) {
            newErrors.email = "이메일을 입력해주세요.";
        } else if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
            newErrors.email = "올바른 이메일 형식이 아닙니다. "
        }

        setErrors(newErrors);  //false가 뜨면 조건에 안맞아 fail=false가 뜸, pass하면 true
        return Object.keys(newErrors).length === 0;
    }
    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!validate()) return;

        // /result 이동을 시킴
        // queryString을 통해 지금 준비된 state의 값을 전달해줘야 함
        // navigate(`/result?username=${username}&password=${password}&name=${name}&email=${email}`);

        // 전달해야 하는 데이터가 담긴 객체를 준비
        const data = {username, password, name, email};
        // new URLSearchParams(data) 를 통해 객체를 쿼리스트링으로 변환 후, string으로 변환
        const queryString = new URLSearchParams(data).toString();
        navigate(`/result?${queryString}`);
    };

    return (
        <Wrapper>
            <Card>
                <Title>회원가입</Title>

                <Form onSubmit={onSubmit}>
                    <InputGroup>
                        <Input placeholder={"아이디"}
                               onChange={e => setUsername(e.target.value)}/>
                        {errors.username && <ErrorText>{errors.username}</ErrorText>}
                    </InputGroup>
                    <InputGroup>
                        <Input
                            type={"password"}
                            placeholder={"비밀번호"}
                            onChange={e => setPassword(e.target.value)}
                        />
                        {errors.password && <ErrorText>{errors.password}</ErrorText>}
                    </InputGroup>
                    <InputGroup>
                        <Input placeholder={"이름"}
                               onChange={e => setName(e.target.value)}/>
                        {errors.name && <ErrorText>{errors.name}</ErrorText>}
                    </InputGroup>
                    <InputGroup>
                        <Input placeholder={"이메일"}
                               onChange={e => setEmail(e.target.value)}/>
                        {errors.email && <ErrorText>{errors.email}</ErrorText>}
                    </InputGroup>
                    <Button>회원가입</Button>
                </Form>
            </Card>
        </Wrapper>
    );
}

export default SignUp;