import {
  Background,
  PageHeader,
  CustomInput,
  CustomButton,
  CustomLink,
  CustomCheckBox,
  CustomFormWrapper,
} from '../components';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form } from 'antd';

const LogInPage = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Background>
      <CustomFormWrapper>
        <PageHeader text="Войдите в систему с помощью Email или имени пользователя:">
          <Form initialValues={{ remember: true }} onFinish={onFinish}>
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Пожалуйста, введите имя пользователя или Email' }]}
            >
              <CustomInput prefix={<UserOutlined />} placeholder="Email или имя пользователя" type="text" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: 'Пожалуйста, введите свой пароль' }]}>
              <CustomInput prefix={<LockOutlined />} placeholder="Пароль" type="password" />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <CustomCheckBox text="Запомнить меня." />
              </Form.Item>
              <CustomLink text="Забыли пароль?" to="" />
            </Form.Item>
            <CustomButton text="Войти" type="primary" htmlType="submit" />
            Еще не зарегистрированы? <CustomLink text="Зарегистрироваться сейчас!" to="/create-account" />
          </Form>
        </PageHeader>
      </CustomFormWrapper>
    </Background>
  );
};

export default LogInPage;
