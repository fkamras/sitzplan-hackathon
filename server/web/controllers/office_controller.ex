defmodule Sitzplan.OfficeController do
  use Sitzplan.Web, :controller

  alias Sitzplan.Office

  def index(conn, _params) do
    offices = Repo.all(Office) |> Repo.preload([:maps, maps: :users])
    render(conn, "index.json", offices: offices)
  end

  def create(conn, %{"office" => office_params}) do
    changeset = Office.changeset(%Office{}, office_params)

    case Repo.insert(changeset) do
      {:ok, office} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", office_path(conn, :show, office))
        |> render("show.json", office: office |> Repo.preload([:maps, maps: :users]))
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Sitzplan.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    office = Repo.get!(Office, id) |> Repo.preload([:maps, maps: :users])
    render(conn, "show.json", office: office)
  end

  def update(conn, %{"id" => id, "office" => office_params}) do
    office = Repo.get!(Office, id) |> Repo.preload([:maps, maps: :users])
    changeset = Office.changeset(office, office_params)

    case Repo.update(changeset) do
      {:ok, office} ->
        render(conn, "show.json", office: office)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Sitzplan.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    office = Repo.get!(Office, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(office)

    send_resp(conn, :no_content, "")
  end
end
