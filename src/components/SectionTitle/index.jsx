export const SectionTitle = ({ title }) => {
    return (
    <div className="section-header" style={{
        textAlign: 'center',
        paddingBottom: '3rem'
    }}>
        <h1>{title}</h1>
    </div>
    )
}

export default SectionTitle;