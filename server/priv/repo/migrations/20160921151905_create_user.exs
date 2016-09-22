defmodule Sitzplan.Repo.Migrations.CreateUser do
  use Ecto.Migration

  def change do
    create table(:users) do
      add :name, :string, null: false
      add :work_title, :string
      add :mapx, :integer, null: false
      add :mapy, :integer, null: false
      add :phone, :string
      add :email, :string
      add :social, :map
      add :quote, :text
      add :department_id, references(:departments, on_delete: :nothing)

      timestamps()
    end

    create index(:users, [:department_id])
    create unique_index(:users, [:email])
  end
end
