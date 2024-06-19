export function CVPreview({ data }) {
    return (
      <div className='cvPreview'>
        <h2>CV Preview</h2>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>Introduction:</strong> {data.intro}</p>
      </div>
    );
  }