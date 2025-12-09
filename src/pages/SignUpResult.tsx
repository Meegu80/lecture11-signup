import { useSearchParams } from "react-router";
import { Card, Title, Wrapper } from "./SignUp.tsx";
import styled from "styled-components";

const SectionTitle = styled.h2`
    font-size: 20px;
    margin-bottom: 16px;
    border-left: 4px solid #4f46e5;
    padding-left: 10px;
`;

const Item = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #ececec;
`;

const Label = styled.span`
    font-weight: 600;
    color: #555555;
`;

const Value = styled.span`
    color: #222222;
`;

function SignUpResult() {
    const [params] = useSearchParams();

    const username = params.get("username") || "";
    const password = params.get("password") || "";
    const name = params.get("name") || "";
    const email = params.get("email") || "";

    return (
        <Wrapper>
            <Card>
                <Title>회원가입 결과</Title>

                <section>
                    <SectionTitle>queryString 결과</SectionTitle>

                    <Item>
                        <Label>아이디</Label>
                        <Value>{username}</Value>
                    </Item>
                    <Item>
                        <Label>비밀번호</Label>
                        <Value>{password}</Value>
                    </Item>
                    <Item>
                        <Label>이름</Label>
                        <Value>{name}</Value>
                    </Item>
                    <Item>
                        <Label>이메일</Label>
                        <Value>{email}</Value>
                    </Item>
                </section>
            </Card>
        </Wrapper>
    );
}

export default SignUpResult;