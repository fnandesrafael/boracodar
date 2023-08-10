const formatDate = (date: Date) => {
  const dateFormater = new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return dateFormater.format(date);
};

export default formatDate;
