import { ReactNode } from "react";

import { ToastContainer } from 'react-toastify';

export const withToast = (component: () => ReactNode) => () =>
  <>
    {component()}

  </>;