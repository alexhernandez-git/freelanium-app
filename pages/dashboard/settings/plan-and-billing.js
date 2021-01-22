import SettingsLayout from "components/pages/dashboard/settings/SettingsLayout";
import useAuthRequired from "hooks/useAuthRequired";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import moment from "moment";
import AddBillingInformationForm from "components/Forms/AddBillingInformationForm";
import Spinner from "components/ui/Spinner";
import ChangePaymentMethodForm from "components/Forms/ChangePaymentMethodForm";
import BillingHistory from "components/pages/dashboard/settings/BillingHistory";
import BillingPlan from "components/pages/dashboard/settings/BillingPlan";
import FreeTrialPlan from "components/pages/dashboard/settings/FreeTrialPlan";
import BecomeASeller from "components/pages/dashboard/settings/BecomeASeller";
import PaymentMethodInfo from "components/pages/dashboard/settings/PaymentMethodInfo";
const billing = () => {
  const [cantRender, authReducer] = useAuthRequired();
  const [addBillingInformation, setAddBillingInformation] = useState(false);
  const handleOpenAddBilling = () => {
    setAddBillingInformation(true);
  };
  const [changingPaymentMethod, setChangingPaymentMethod] = useState(false);
  const handleOpenChangePaymentMethod = () => {
    setChangingPaymentMethod(true);
  };
  const handleCloseChangePaymentMethod = () => {
    setChangingPaymentMethod(false);
  };
  const [planPaymentMethod, setPlanPaymentMethod] = useState(null);
  useEffect(() => {
    if (
      !authReducer.is_loading &&
      authReducer.user?.payment_methods &&
      authReducer.user?.payment_methods.length > 0 &&
      !authReducer.changing_payment_method
    ) {
      const planDefaultPaymentMethod =
        authReducer.user.plan_default_payment_method;
      const paymentMethod = authReducer.user?.payment_methods.find(
        (pm) => pm.id == planDefaultPaymentMethod
      );
      setPlanPaymentMethod(paymentMethod);
    }
  }, [authReducer.is_loading, authReducer.changing_payment_method]);
  return !cantRender || authReducer.adding_billing_information ? (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  ) : (
    <>
      {/* Asside */}
      <SettingsLayout>
        {authReducer.user?.default_payment_method ? (
          <>
            <div class="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
              {changingPaymentMethod ? (
                <ChangePaymentMethodForm
                  handleCloseChangePaymentMethod={
                    handleCloseChangePaymentMethod
                  }
                  planPaymentMethod={planPaymentMethod}
                />
              ) : (
                <PaymentMethodInfo
                  handleOpenChangePaymentMethod={handleOpenChangePaymentMethod}
                  planPaymentMethod={planPaymentMethod}
                />
              )}
              <BillingPlan />

              <BillingHistory />
            </div>
          </>
        ) : authReducer?.user?.have_active_plan ? (
          <>
            {addBillingInformation ? (
              <AddBillingInformationForm />
            ) : (
              <FreeTrialPlan handleOpenAddBilling={handleOpenAddBilling} />
            )}
          </>
        ) : (
          <>
            <BecomeASeller />
          </>
        )}
      </SettingsLayout>
    </>
  );
};

export default billing;
