import { getUserByJwt, loadCurrency, loadUser } from "redux/actions/auth";
import { initialDataFetched } from "redux/actions/initialData";
import { fetchOffer } from "redux/actions/offers";
import { fetchPlans } from "redux/actions/plans";

const useDispatchInitialData = async (dispatch, router) => {
  const { pathname } = router;
  if (pathname === "/order-checkout/[...params]") {
    const { params } = router.query;

    if (params[1]) {
      await dispatch(getUserByJwt(params[1]));
    } else {
      await dispatch(loadUser());
    }
  } else {
    await dispatch(loadUser());
  }
  await dispatch(loadCurrency());
  await dispatch(fetchPlans());

  console.log(router);
  switch (pathname) {
    case "/order-checkout/[...params]":
      const { params } = router.query;
      await dispatch(fetchOffer(params[0]));

      break;
  }

  await dispatch(initialDataFetched());
};

export default useDispatchInitialData;
