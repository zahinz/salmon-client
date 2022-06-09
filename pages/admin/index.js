import axios from "axios";
import React, { useState } from "react";
import Container from "../../components/dumb/Container";
import InvContainedButton from "../../components/reusable/InvContainedButton";
import InvInput from "../../components/reusable/InvInput";
import Header from "../../components/smart/Header";
import { useLocalStorage } from "../../lib/hooks/useLocalStorage";

const SignIn = () => {
  const [isLoading, setLoading] = useState(false);
  const [values, setValues] = useState({
    identifier: "",
    password: "",
  });
  const [token, setToken] = useLocalStorage("AuthToken", "");

  const signInApi = (data) => {
    setLoading(true);
    axios
      .post("http://localhost:1337/api/auth/local", data)
      .then((res) => {
        console.log(res);
        const {
          data: { jwt },
        } = res;
        setToken(jwt);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <>
      <Header />
      <Container className="flex items-center justify-center" withHeader>
        <div className="flex flex-col items-start justify-center bg-white h-[350px] w-[500px] p-10 mb-10 rounded-md">
          <p className="text-blue-600 text-2xl font-bold mb-8">
            Welcome salmons.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              signInApi(values);
              setValues({ identifier: "", password: "" });
            }}
            className="w-full"
          >
            <div className="flex flex-col gap-2 w-full">
              <InvInput
                label="Email"
                value={values.identifier}
                onChange={(e) =>
                  setValues({ ...values, identifier: e.target.value })
                }
              />
              <InvInput
                label="Password"
                type="password"
                value={values.password}
                onChange={(e) =>
                  setValues({ ...values, password: e.target.value })
                }
              />
            </div>
            <InvContainedButton
              fullWidth
              className="mt-8"
              type="submit"
              disabled={
                isLoading || values.identifier === "" || values.password === ""
              }
            >
              Sign in
            </InvContainedButton>
          </form>
        </div>
      </Container>
    </>
  );
};

export default SignIn;
