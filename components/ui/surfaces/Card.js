const Card = ({ title = '', description = '', containerClass = '', titleClass = '', descriptionClass = '' }) => {
  <div className={`w-full rounded overflow-hidden shadow-lg ${containerClass}`}>
    <div className="px-6 py-4">
      <div className={`font-bold text-xl mb-2 ${titleClass}`}>
        {title}
      </div>
      <p className={`text-gray-700 text-base ${descriptionClass}`}>
        {description}
      </p>
    </div>
  </div>
}

export default Card
