const Login_form = (user, setUsuario) => {
  const addUserNameHandler = (event) => {
    setUsuario((setUserViejo) => ({
      ...setUserViejo,
      userName: event.target.value,
    }));
  };
  const addPasswordHandler = (event) => {
    setUsuario((setUserViejo) => ({
      ...setUserViejo,
      password: event.target.value,
    }));
  };
  const onClickSubmitHandler = (event) => {
    setUsuario((usuarios) => [...usuarios, user]);
  };
  return (
    <form>
      <div className="mb-3">
        <label className="form-label">UserName</label>
        <input
          type="text"
          className="form-control"
          onChange={addUserNameHandler}
        />
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          onChange={addPasswordHandler}
        />
      </div>
      <input
        type="button"
        className="btn btn-primary"
        value="Submit"
        onClick={onClickSubmitHandler}
      />
    </form>
  );
};
export default Login_form;
