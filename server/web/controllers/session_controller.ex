defmodule Sitzplan.SessionController do
  use Sitzplan.Web, :controller

  alias Sitzplan.User

  def create(conn, %{"session" => session_params}) do
    user = Repo.get_by!(User, email: session_params["email"])

    conn
    |> put_session(:user_id, user.id)
    |> render("show.json", session: %{user_id: user.id, user: user})
  end

  def show(conn, _params) do
    user_id = get_session(conn, :user_id)

    if user_id == nil do
      send_resp(conn, :not_found, "")
    else
      user = Repo.get!(User, user_id)

      render(conn, "show.json", session: %{user_id: user.id, user: user})
    end
  end

  def delete(conn, _params) do
    conn
    |> delete_session(:user_id)
    |> send_resp(:no_content, "")
  end
end
