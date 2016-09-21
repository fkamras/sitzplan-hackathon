defmodule Sitzplan.Router do
  use Sitzplan.Web, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug :fetch_session
    plug :fetch_flash
    # plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  scope "/api", Sitzplan do
    pipe_through :api

    resources "/departments", DepartmentController
    resources "/users", UserController
  end
end
