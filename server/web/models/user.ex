defmodule Sitzplan.User do
  use Sitzplan.Web, :model

  schema "users" do
    field :name, :string
    field :work_title, :string
    field :mapx, :integer
    field :mapy, :integer
    field :phone, :string
    field :email, :string
    field :social, :map
    field :quote, :string
    belongs_to :map, Sitzplan.Map

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :work_title, :mapx, :mapy, :phone, :email, :social, :quote, :map_id])
    |> validate_required([:name])
    |> foreign_key_constraint(:map_id)
  end
end
