const fakeUsers = [
  {
    id: "1",
    firstName: 'John',
    lastName: "Doe",
    mail: "john@doe.sisilafamille",
    birthDate: "30/10/1995",
    profilePicture: 'https://images.unsplash.com/photo-1505503693641-1926193e8d57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
    docs: [
      {
        doc_type: "CV",
        doc_name: "CVdeJohnDoe.pdf"
      }
    ]
  },
  {
    id: "2",
    firstName: 'Jane',
    lastName: "Dae",
    mail: "jane@dae.sisilafamille",
    birthDate: "25/08/1992",
    profilePicture: "https://images.unsplash.com/photo-1532910404247-7ee9488d7292?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",
    docs: [
      {
        doc_type: "LM",
        doc_name: "LMdeJane.pdf",
      },
      {
        doc_type: "CV",
        doc_name: "CVdeJane.pdf"
      }
    ]
  },
]

export default fakeUsers;