function proveedor({ children, proveedor }) {
    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <p><strong>{proveedor.nombre}</strong></p>
            <p>{proveedor.nacional ? "Sí" : "No"}</p>
            {children}
        </div>
    )
}

export default proveedor

