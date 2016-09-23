defmodule Sitzplan.Repo.Migrations.AddMapIdToUsers do
  use Ecto.Migration

  def change do
    alter table(:users) do
      add :map_id, references(:maps, on_delete: :nothing)
    end

    create index(:users, [:map_id])
  end
end
