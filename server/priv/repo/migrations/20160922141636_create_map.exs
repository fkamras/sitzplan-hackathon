defmodule Sitzplan.Repo.Migrations.CreateMap do
  use Ecto.Migration

  def change do
    create table(:maps) do
      add :name, :string
      add :file, :string
      add :floor, :integer
      add :office_id, references(:offices, on_delete: :nothing)

      timestamps()
    end

    create index(:maps, [:office_id])
  end
end
