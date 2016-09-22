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
    belongs_to :department, Sitzplan.Department

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:name, :work_title, :mapx, :mapy, :phone, :email, :social, :quote])
    |> validate_required([:name])
  end
end
