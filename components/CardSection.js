export default function CardSection({children}) {
    return (
        <>
            <div className='inline-grid grid-cols-2'>
                {children}
            </div>
        </>
    )
}