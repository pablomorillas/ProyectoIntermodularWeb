function RequestCard({ imagen, titulo, descripcion }) {
    return (
        <article
            tabIndex="0"
            className="flex flex-col items-start gap-3 p-4 rounded-lg bg-[linear-gradient(0deg,rgba(247,247,247,1)_0%,rgba(247,247,247,1)_100%)] shadow-md hover:shadow-lg transition-shadow duration-300"
            aria-label={titulo}
        >
            <figure className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
                <img
                    src={imagen}
                    alt={`Imagen de ${titulo}`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                />
                <figcaption className="sr-only">{descripcion}</figcaption>
            </figure>

            <header>
                <h2 className="text-lg font-semibold leading-snug text-gray-800">
                    <strong>{titulo}</strong>
                </h2>
            </header>

            <p className="text-sm leading-relaxed text-gray-700">
                {descripcion}
            </p>
        </article>
    );
}

export default RequestCard;