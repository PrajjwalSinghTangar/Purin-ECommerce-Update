import { EnvironmentFilled, FacebookOutlined, InstagramOutlined, MailOutlined, PhoneFilled, TwitterOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { mobile,tablet } from "../responsive";

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
    ${tablet({flexDirection: "column"})}
`;

const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction:column;
    padding: 20px;
`;

const Logo = styled.h1`
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const SocialContainer = styled.div`
    display: flex;
`;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;
    color:white;
    background-color: #${props=> props.color};
    display: flex;
    align-items:center;
    justify-content: center;
    margin:0px 10px;
`;

const Center = styled.div`
    flex:1;
    padding:20px;
    ${mobile({display: "none"})}
    ${tablet({display: "none"})}
`;

const Title = styled.h3`
    margin-bottom:30px;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style:none;
    display: flex;
    flex-wrap:wrap;
`;

const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`;

const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({backgroundColor: "lightgray"})}
    ${tablet({backgroundColor: "lightgray"})}
`;

const ContactItem = styled.div`
    margin-bottom:20px;
    display: flex;
    align-items: center;
`;


const Footer = () => {
    return(
        <Container>
            <Left>
                <Logo>PURIN°</Logo>
                <Desc>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis nostrum iusto inventore ipsam quo praesentium, quisquam dolor, animi accusamus adipisci itaque delectus tenetur illo distinctio quam, laborum ducimus eligendi quos!
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookOutlined />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <InstagramOutlined />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <TwitterOutlined />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Mens' Fashion</ListItem>
                    <ListItem>Womens' Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <EnvironmentFilled style={{marginRight:"10px"}}/>
                    777 ABC, Ienginea Tchokobar, Chester
                </ContactItem>
                <ContactItem>
                    <PhoneFilled  style={{marginRight:"10px"}}/>
                    +32 87233 32838
                </ContactItem>
                <ContactItem>
                    <MailOutlined  style={{marginRight:"10px"}}/>
                    email.contactus@purin.com
                </ContactItem>
            </Right>
        </Container>
    )
}

export default Footer;