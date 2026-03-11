import { version } from "package.json";
import { useEffect, useState } from "react";
import { Form, Input, Button, message, Spin } from "antd";
import { UserOutlined, LockOutlined, SafetyOutlined, LogoutOutlined } from "@ant-design/icons";
import { getAuthData, clearAuthData, type AuthData } from "./lib/auth";
import { getCaptcha, login, logout } from "./lib/api";

function IndexPopup() {
  const [loading, setLoading] = useState(true);
  const [authData, setAuthData] = useState<AuthData | null>(null);
  const [captcha, setCaptcha] = useState<{ id: string; image: string } | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [form] = Form.useForm();

  const [captchaLoading, setCaptchaLoading] = useState(false);

  const loadCaptcha = async () => {
    setCaptchaLoading(true);
    try {
      const res = await getCaptcha();
      console.log("验证码响应:", res);
      if (res.code === 200 && res.data) {
        setCaptcha({
          id: res.data.captcha_id,
          image: res.data.image_base64,
        });
      } else {
        message.error(res.message || "获取验证码失败");
      }
    } catch (e) {
      console.error("获取验证码失败", e);
      message.error("获取验证码失败，请检查网络");
    } finally {
      setCaptchaLoading(false);
    }
  };

  const checkLoginState = async () => {
    setLoading(true);
    try {
      const data = await getAuthData();
      setAuthData(data);
      if (!data) {
        await loadCaptcha();
      }
    } catch (e) {
      console.error("检查登录状态失败", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkLoginState();
  }, []);

  const handleLogin = async (values: { phone: string; password: string; captcha: string }) => {
    if (!captcha) {
      message.error("请先获取验证码");
      return;
    }
    setSubmitting(true);
    try {
      const res = await login(values.phone, values.password, captcha.id, values.captcha);
      if (res.code === 200) {
        message.success("登录成功");
        await checkLoginState();
      } else {
        message.error(res.message || "登录失败");
        await loadCaptcha();
        form.setFieldValue("captcha", "");
      }
    } catch (e) {
      message.error("登录失败，请重试");
      await loadCaptcha();
    } finally {
      setSubmitting(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      await clearAuthData();
      setAuthData(null);
      form.resetFields();
      await loadCaptcha();
      message.success("已退出登录");
    } catch (e) {
      console.error("退出失败", e);
    }
  };

  if (loading) {
    return (
      <div style={{ width: 320, height: 280, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Spin />
      </div>
    );
  }

  if (authData) {
    return (
      <div style={{ width: 320, padding: 20 }}>
        <h2 style={{ marginTop: 0, marginBottom: 16 }}>Tour Helper</h2>
        <div style={{ background: "#f5f5f5", padding: 16, borderRadius: 8, marginBottom: 16 }}>
          <p style={{ margin: "0 0 8px 0" }}>
            <strong>用户：</strong>{authData.user.name}
          </p>
          <p style={{ margin: "0 0 8px 0" }}>
            <strong>手机：</strong>{authData.user.phone}
          </p>
          <p style={{ margin: 0, fontSize: 12, color: "#999" }}>
            有效期至：{authData.expiresAt}
          </p>
        </div>
        <Button 
          icon={<LogoutOutlined />} 
          onClick={handleLogout}
          block
        >
          退出登录
        </Button>
        <div style={{ marginTop: 16 }}>
          <a 
            href="https://test-c2x1zzjx4rou.feishu.cn/docx/CHHVdMWPBorPDnxrLBDck6nanLd" 
            target="_blank"
            style={{ fontSize: 12, color: "#1677ff" }}
          >
            使用帮助
          </a>
        </div>
        <p style={{ color: "#ccc", textAlign: "center", marginBottom: 0, marginTop: 12, fontSize: 12 }}>
          version: {version}
        </p>
      </div>
    );
  }

  return (
    <div style={{ width: 320, padding: 20 }}>
      <h2 style={{ marginTop: 0, marginBottom: 20, textAlign: "center" }}>Tour Helper 登录</h2>
      <Form form={form} onFinish={handleLogin} autoComplete="off">
        <Form.Item
          name="phone"
          rules={[
            { required: true, message: "请输入手机号" },
            { pattern: /^1\d{10}$/, message: "手机号格式不正确" },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="手机号" maxLength={11} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="密码" />
        </Form.Item>
        <Form.Item style={{ marginBottom: 16 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Form.Item
              name="captcha"
              rules={[{ required: true, message: "请输入验证码" }]}
              noStyle
            >
              <Input 
                prefix={<SafetyOutlined />} 
                placeholder="验证码" 
                maxLength={4}
                style={{ flex: 1 }}
              />
            </Form.Item>
            {captcha ? (
              <img 
                src={captcha.image} 
                alt="验证码" 
                onClick={loadCaptcha}
                style={{ height: 32, cursor: "pointer", borderRadius: 4, flexShrink: 0 }}
                title="点击刷新"
              />
            ) : (
              <Button onClick={loadCaptcha} loading={captchaLoading} style={{ height: 32, minWidth: 80 }}>
                {captchaLoading ? "" : "获取验证码"}
              </Button>
            )}
          </div>
        </Form.Item>
        <Form.Item style={{ marginBottom: 12 }}>
          <Button type="primary" htmlType="submit" loading={submitting} block>
            登录
          </Button>
        </Form.Item>
      </Form>
      <p style={{ color: "#ccc", textAlign: "center", marginBottom: 0, fontSize: 12 }}>
        version: {version}
      </p>
    </div>
  );
}

export default IndexPopup;
