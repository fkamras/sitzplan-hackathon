defmodule Sitzplan.MapController do
  use Sitzplan.Web, :controller

  alias Sitzplan.Map

  def index(conn, _params) do
    maps = Repo.all(Map)
    render(conn, "index.json", maps: maps)
  end

  def create(conn, %{"map" => map_params}) do
    changeset = Map.changeset(%Map{}, map_params)

    case Repo.insert(changeset) do
      {:ok, map} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", map_path(conn, :show, map))
        |> render("show.json", map: map)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Sitzplan.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    map = Repo.get!(Map, id)
    render(conn, "show.json", map: map)
  end

  def update(conn, %{"id" => id, "map" => map_params}) do
    map = Repo.get!(Map, id)
    changeset = Map.changeset(map, map_params)

    case Repo.update(changeset) do
      {:ok, map} ->
        render(conn, "show.json", map: map)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(Sitzplan.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    map = Repo.get!(Map, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(map)

    send_resp(conn, :no_content, "")
  end
end
