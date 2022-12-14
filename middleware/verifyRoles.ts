export interface ReqOptions {
  roles?: { role?: any }[];
}

const verifyRoles = (...allowedRoles: any) => {
  return (
    req?: ReqOptions,
    res?: { sendStatus(status: number): void },
    next?: any
  ) => {
    if (!req?.roles) return res?.sendStatus(401);
    const rolesArray = [...allowedRoles];
    console.log(rolesArray);
    console.log(req?.roles);
    const result = req?.roles
      ?.map((role) => rolesArray?.includes(role))
      .find((val) => val === true);
    if (!result) return res?.sendStatus(401);
    next();
  };
};

export { verifyRoles };
