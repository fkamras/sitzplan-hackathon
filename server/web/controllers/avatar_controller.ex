defmodule Sitzplan.AvatarController do
  use Sitzplan.Web, :controller

  def index(conn, _params) do
    avatars = File.ls!(Path.join([:code.priv_dir(:sitzplan), 'static', 'images', 'avatars']))
    |> Enum.map(fn(file) -> "/images/avatars/" <> file end)

    json(conn, avatars)
  end
end
