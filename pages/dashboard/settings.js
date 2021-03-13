import SettingsLayout from "components/pages/dashboard/settings/SettingsLayout";
import useAuthRequired from "hooks/useAuthRequired";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  changeEmail,
  isEmailAvailable,
  isUsernameAvailable,
  resetEmailAvailable,
  resetUsernameAvailable,
  updateUser,
} from "redux/actions/auth";
import { useDispatch } from "react-redux";
import CropperModal from "components/pages/dashboard/settings/CropperModal";
import countries from "data/countries";
import currencies from "data/currencies";
import Spinner from "components/ui/Spinner";
const settings = () => {
  const dispatch = useDispatch();
  const [cantRender, authReducer] = useAuthRequired();
  const {
    username_available_error,
    username_available,
    email_available,
    email_available_error,
    user,
  } = authReducer;
  const profileForm = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: user && user.username,
      about: user && user.about,
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      about: Yup.string().max(1000).nullable(),
    }),
    onSubmit: async (values) => {
      // console.log(valores);
      dispatch(updateUser(values));
    },
  });
  React.useEffect(() => {
    if (user) {
      dispatch(resetUsernameAvailable());
      if (profileForm.values.username != user.username) {
        const timeoutId = setTimeout(() => {
          dispatch(
            isUsernameAvailable({ username: profileForm.values.username })
          );
        }, 500);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [profileForm.values.username]);

  const [showCropper, setShowCropper] = React.useState(false);
  const [newImage, setNewImage] = React.useState({
    image: null,
    name: "",
  });
  const handleOpenCropper = (e) => {
    setShowCropper(true);
  };
  const handleCloseCropper = () => {
    setShowCropper(false);
  };
  const handleChangeImage = (e) => {
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    console.log(files);
    if (files.length > 0) {
      const reader = new FileReader();
      reader.onload = () => {
        setNewImage({ image: reader.result, name: files[0].name });
        handleOpenCropper();
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const personalInfoForm = useFormik({
    enableReinitialize: true,
    initialValues: {
      first_name: user && user.first_name,
      last_name: user && user.last_name,
      country: user && user.country,
      currency: user && user.currency,
    },
    validationSchema: Yup.object({
      first_name: Yup.string().max(150).nullable(),
      last_name: Yup.string().max(150).nullable(),
      country: Yup.string().max(2).nullable(),
      currency: Yup.string().max(3).nullable(),
    }),
    onSubmit: async (values) => {
      // console.log(valores);
      dispatch(updateUser(values));
    },
  });
  const emailForm = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: user && user.email,
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required("Email is required"),
    }),
    onSubmit: async (values) => {
      // console.log(valores);
      dispatch(changeEmail(values));
    },
  });
  React.useEffect(() => {
    if (user) {
      dispatch(resetEmailAvailable());
      if (emailForm.values.email != user.email) {
        const timeoutId = setTimeout(() => {
          dispatch(isEmailAvailable({ email: emailForm.values.email }));
        }, 500);
        return () => clearTimeout(timeoutId);
      }
    }
  }, [emailForm.values.email]);

  return !cantRender ? (
    <div className="flex justify-center items-center h-screen">
      <Spinner />
    </div>
  ) : (
    <>
      {/* Asside */}
      <SettingsLayout>
        <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
          <form onSubmit={profileForm.handleSubmit}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Profile
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    This information will be displayed publicly so be careful
                    what you share.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label
                      htmlFor="company_website"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="username"
                      className="focus:ring-cyan-500 focus:border-cyan-500 flex-grow block w-full min-w-0 rounded-md sm:text-sm border-gray-300"
                      onChange={profileForm.handleChange}
                      onBlur={profileForm.handleBlur}
                      value={profileForm.values.username}
                    />
                    {username_available && (
                      <p
                        className="mt-2 text-sm text-green-600"
                        id="email-error"
                      >
                        {username_available}
                      </p>
                    )}
                    {username_available_error &&
                      username_available_error.data.non_field_errors &&
                      username_available_error.data.non_field_errors.map(
                        (message, i) => (
                          <p
                            key={i}
                            className="mt-2 text-sm text-red-600"
                            id="email-error"
                          >
                            {message}
                          </p>
                        )
                      )}
                    {profileForm.touched.username &&
                    profileForm.errors.username ? (
                      <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                        <p className="font-bold">Error</p>
                        <p>{profileForm.errors.username}</p>
                      </div>
                    ) : null}
                  </div>
                  <div className="col-span-3">
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium text-gray-700"
                    >
                      About
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows="3"
                        className="shadow-sm focus:ring-cyan-500 focus:border-cyan-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="you@example.com"
                        onChange={profileForm.handleChange}
                        onBlur={profileForm.handleBlur}
                        value={profileForm.values.about}
                      ></textarea>
                    </div>
                    {profileForm.touched.about && profileForm.errors.about ? (
                      <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                        <p className="font-bold">Error</p>
                        <p>{profileForm.errors.about}</p>
                      </div>
                    ) : null}
                  </div>

                  <div className="col-span-3">
                    <label className="block text-sm font-medium text-gray-700">
                      Photo
                    </label>
                    <div className="mt-1 flex items-center">
                      {user && user.picture ? (
                        <img
                          class="inline-block h-12 w-12 rounded-full"
                          src={
                            new RegExp(process.env.HOST).test(user.picture)
                              ? user.picture
                              : process.env.HOST + user.picture
                          }
                          alt=""
                        ></img>
                      ) : (
                        <span className="inline-block bg-gray-100 rounded-full overflow-hidden h-12 w-12">
                          <svg
                            className="h-full w-full text-gray-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                      )}

                      <label
                        className="cursor-pointer ml-5 bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                        htmlFor="profile-img"
                      >
                        Change
                      </label>
                      <input
                        id={"profile-img"}
                        type="file"
                        hidden
                        onChange={handleChangeImage}
                      />
                    </div>
                  </div>
                  <CropperModal
                    show={showCropper}
                    handleClose={handleCloseCropper}
                    newImage={newImage}
                  />
                </div>
              </div>

              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-teal-500 to-cyan-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>

          <form onSubmit={personalInfoForm.handleSubmit}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Personal Information
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">
                    Use a permanent address where you can recieve mail.
                  </p> */}
                </div>

                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      autoComplete="given-name"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                      onChange={personalInfoForm.handleChange}
                      onBlur={personalInfoForm.handleBlur}
                      value={personalInfoForm.values.first_name}
                    />
                    {personalInfoForm.touched.first_name &&
                    personalInfoForm.errors.first_name ? (
                      <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                        <p className="font-bold">Error</p>
                        <p>{personalInfoForm.errors.first_name}</p>
                      </div>
                    ) : null}
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      autoComplete="family-name"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                      onChange={personalInfoForm.handleChange}
                      onBlur={personalInfoForm.handleBlur}
                      value={personalInfoForm.values.last_name}
                    />
                    {personalInfoForm.touched.last_name &&
                    personalInfoForm.errors.last_name ? (
                      <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                        <p className="font-bold">Error</p>
                        <p>{personalInfoForm.errors.last_name}</p>
                      </div>
                    ) : null}
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country / Region
                    </label>
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                      onChange={personalInfoForm.handleChange}
                      onBlur={personalInfoForm.handleBlur}
                      value={personalInfoForm.values.country}
                    >
                      <option defaultValue disabled value="">
                        Select one
                      </option>

                      {countries.map((country) => (
                        <option value={country.abbreviation}>
                          {country.country}
                        </option>
                      ))}
                    </select>
                    {personalInfoForm.touched.country &&
                    personalInfoForm.errors.country ? (
                      <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                        <p className="font-bold">Error</p>
                        <p>{personalInfoForm.errors.country}</p>
                      </div>
                    ) : null}
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="currency"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Currency
                    </label>
                    <select
                      id="currency"
                      name="currency"
                      autoComplete="currency"
                      className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                      onChange={personalInfoForm.handleChange}
                      onBlur={personalInfoForm.handleBlur}
                      value={personalInfoForm.values.currency}
                      disabled
                    >
                      <option defaultValue disabled value="">
                        Select one
                      </option>

                      {currencies.map((currency) => (
                        <option value={currency.code}>{currency.code}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-teal-500 to-cyan-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
          <form onSubmit={emailForm.handleSubmit}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
                <div>
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Change email
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Use a permanent address where you can recieve mail.
                  </p>
                </div>

                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email_address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email_address"
                      autoComplete="email"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                      onChange={emailForm.handleChange}
                      onBlur={emailForm.handleBlur}
                      value={emailForm.values.email}
                    />

                    {emailForm.touched.email && emailForm.errors.email ? (
                      <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
                        <p className="font-bold">Error</p>
                        <p>{emailForm.errors.email}</p>
                      </div>
                    ) : (
                      <>
                        {email_available && (
                          <p
                            className="mt-2 text-sm text-green-600"
                            id="email-error"
                          >
                            Email is available
                          </p>
                        )}
                        {email_available_error &&
                          email_available_error.data.non_field_errors &&
                          email_available_error.data.non_field_errors.map(
                            (message, i) => (
                              <p
                                key={i}
                                className="mt-2 text-sm text-red-600"
                                id="email-error"
                              >
                                {message}
                              </p>
                            )
                          )}
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-teal-500 to-cyan-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </SettingsLayout>
    </>
  );
};

export default settings;
