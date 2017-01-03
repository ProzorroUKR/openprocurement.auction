angular.module('auction')
  .config(['$translateProvider', function($translateProvider) {
    $translateProvider.useLocalStorage();
    $translateProvider.translations('en', {
      'at': 'at',
      'Announcement': 'Announcement',
      'Bid': 'Bid',
      'Bidder': 'Bidder',
      'Bidders': ' Bidders',
      'Bidding': 'Bidding',
      'English': 'English',
      'Russian': 'Russian',
      'Ukrainian': 'Ukrainian',
      'Client': 'Client',
      'Edit': 'Edit',
      'Info': 'Info',
      'Initial bids': 'Initial bids',
      'Language': 'Language',
      'Login in as viewer': 'Login in as viewer',
      'Login': 'Login',
      'Logout': 'Logout',
      'Place a bid': 'Place a bid',
      'Cancel': 'Cancel',
      'Preliminary bids': 'Preliminary bids',
      'Round': 'Round',
      'Settings': 'Settings',
      'Time': 'Time',
      'You': 'You',
      'All bidders': 'All bidders',
      'Pause': 'Pause',
      'Results Release': 'Results Release',
      'Waiting': 'Waiting',
      'or lower': 'or lower',
      'UAH': 'UAH',
      'shortTime': 'h:mm a',
      'Restart sync': 'Restart sync',
      'Too low value': 'Too low value',
      'Too high value': 'Too high value',
      'Not valid bidder': 'Not valid bidder',
      'Stage not for bidding': 'Stage not for bidding',
      'Bid placed': 'Bid placed',
      'Normilized Price': 'Normalized price:',
      'Full Price': 'Full price:',
      'Bidder Coeficient':'Coeficient:',
      'Your proposal': 'Your proposal',
      'Finish': 'Finish',
      'days': 'days',
      'hours': 'hr',
      'minutes': 'min',
      'seconds': 'sec',
      'minimum': 'minimum',
      'Internet connection is lost. Attempt to restart after 1 sec': 'Internet connection is lost. Attempt to restart after 1 sec',
      'Synchronization failed': 'Synchronization failed',
      'Possible results': 'Possible results',
      'In the room came a new user': 'In the room came a new user',
      'until the auction starts': 'until the auction starts',
      'until your turn': 'until your turn',
      'until your turn ends': 'until your turn ends',
      'until the round starts': 'until the round starts',
      'until the round ends': 'until the round ends',
      'until the results announcement': 'until the results announcement',
      'Аuction was completed': 'Аuction was completed on',
      'prohibit connection': 'prohibit connection',
      'Step reduction of Bid': 'Step reduction of Bid',
      'Start value': 'Start value',
      'Your bid appears too low': 'Your bid appears too low',
      'Return to Tender': 'Return to Tender',
      'Your latest bid': 'Your latest bid',
      'Tender cancelled': 'Tender cancelled',
      'Bid canceled': 'Bid canceled',
      'Login is currently closed.': 'Login is currently closed.',
      'Please try again later.': 'Please try again later.',
      'Cancel Bid': 'Cancel Bid',
      'Ability to submit bids has been lost. Wait until page reloads, and retry.': 'Ability to submit bids has been lost. Wait until page reloads, and retry.',
      'Ability to submit bids has been lost. Wait until page reloads.': 'Ability to submit bids has been lost. Wait until page reloads',
      'You are registered as a bidder. Wait for the start of the auction.': 'You are registered as a bidder. Wait for the start of the auction.',
      'You are an observer and cannot bid.': 'You are an observer and cannot bid.',
      'Your browser is out of date, and this site may not work properly.': 'Your browser is out of date, and this site may not work properly.',
      'Learn how to update your browser.': 'Learn how to update your browser.',
      'Not Found': 'Not Found',
      'to Mine': 'to Mine',
      'Clear': 'Clear',
      'to General': 'to General',
      'The proposal you have submitted coincides with a proposal of the other participant. His proposal will be considered first, since it has been submitted earlier.': 'The proposal you have submitted coincides with a proposal of the other participant. His proposal will be considered first, since it has been submitted earlier.',
      'Waiting for the disclosure of the participants\' names': 'Waiting for the disclosure of the participants\' names',
      'Unable to place a bid. Check that no more than 2 auctions are simultaneously opened in your browser.': 'Unable to place a bid. Check that no more than 2 auctions are simultaneously opened in your browser.',
      'Auction has not started and will be rescheduled': 'Auction has not started and will be rescheduled',
      'Please wait for the auction start.': 'Please wait for the auction start.'
    });

    $translateProvider.translations('ro', {
      'at': 'la',
      'Announcement': 'Anunțarea rezultatelor',
      'Bid': 'Oferta',
      'Bidder': 'Licitant',
      'Bidders': 'Licitanți',
      'Bidding': 'Licitație',
      'English': 'Engleză',
      'Russian': 'Rusă',
      'Ukrainian': 'Ucraineană',
      'Client': 'Client',
      'Edit': 'Editare',
      'Info': 'Informație',
      'Initial bids': 'Ofertele inițiale',
      'Language': 'Limba',
      'Login in as viewer': 'Intrare ca vizualizator',
      'Login': 'Intrare',
      'Logout': 'Ieșiere',
      'Place a bid': 'Înnaintează oferta',
      'Cancel': 'Anulare',
      'Preliminary bids': 'Ofertare preliminară',
      'Round': 'Rundă',
      'Settings': 'Setări',
      'Time': 'Timpul',
      'You': 'Dvs.',
      'All bidders': 'Toți participanții',
      'Pause': 'Pauză',
      'Results Release': 'Rezutatele',
      'Waiting': 'Așteptare',
      'or lower': 'sau mai puțin',
      'UAH': 'lei',
      'shortTime': 'HH:mm',
      'Restart sync': 'Restart sincronizare',
      'Too low value': 'Valoare prea mica a ofertei',
      'Too high value': 'Valoare prea mare a ofertei',
      'Not valid bidder': 'Nu sunteți utilizator valid',
      'Stage not for bidding': 'Etapa dată nu presupune înnaintarea ofertelor',
      'Bid placed': 'Oferta a fost plasată',
      'Normilized Price': 'Preț normalizat',
      'Full Price': 'Preț de facto',
      'Bidder Coeficient':'Coeficient',
      'Your proposal': 'Oferta Dvs.',
      'Finish': 'Finalizat',
      'days': 'zile',
      'hours': 'ore',
      'minutes': 'min',
      'seconds': 'sec',
      'minimum': 'minim',
      'Internet connection is lost. Attempt to restart after 1 sec': 'S-a pierdut legătura internet. Incerc sa mă reconectez in 1 sec.',
      'Synchronization failed': 'Eroare de sincronizare',
      'Possible results': 'Rezultatele posibile',
      'In the room came a new user': 'În cabinet a intrat un utilizator nou',
      'until the auction starts': 'până începe licitația',
      'until your turn': 'pâna la rândul Dvs.',
      'until your turn ends': 'până se sfârșește rândul Dvs.',
      'until the round starts': 'pâna la începutul rundei',
      'until the round ends': 'pâna la sfârșitul rundei',
      'until the results announcement': 'pâna la anunțarea rezultatelor',
      'Аuction was completed': 'Licitația a luat sfârșit',
      'prohibit connection': 'interzice conectarea',
      'Step reduction of Bid': 'Pasul de reducdre a ofertei',
      'Start value': 'Valoarea de start',
      'Your bid appears too low': 'Ați indicat o valoare foare mică, sunteți sigur?',
      'Return to Tender': 'Înnapoi către licitație',
      'Your latest bid': 'Ultima ofertă a Dvs.',
      'Tender cancelled': 'Procedura a fost anulată',
      'Bid canceled': 'Oferta a fost anulată',
      'Login is currently closed.': 'La moment intrarea este închisă.',
      'Please try again later.': 'Încercați mai târziu.',
      'Cancel Bid': 'Anulează oferta.',
      'Ability to submit bids has been lost. Wait until page reloads, and retry.': 'Posibiliatea înnaintării ofertei a fost pierdută. Aștepați până pagina se reîncarcă și încercați din nou.',
      'Ability to submit bids has been lost. Wait until page reloads.': 'Posibiliatea înnaintării ofertei a fost pierdută. Aștepați până pagina se reîncarcă.',
      'You are registered as a bidder. Wait for the start of the auction.': 'Sunteți înregistrat ca ofertant. Aștepați pâna licitația începe.',
      'You are an observer and cannot bid.': 'Sunteți vizualizator și nu puteți participa la licitație.',
      'Your browser is out of date, and this site may not work properly.': 'Browser-ul dumneavoastră este învechit și acest site poate să nu funcționeze corect.',
      'Learn how to update your browser.': 'Vedeți cum puteți să actualizți browser-ul dumneavoastră. ',
      'Not Found': 'Licitația cu acest Id nu poate fi găsită',
      'to Mine': 'spre a mea',
      'Clear': 'Curăță',
      'to General': 'spre Generală',
      'The proposal you have submitted coincides with a proposal of the other participant. His proposal will be considered first, since it has been submitted earlier.': 'Oferta Dvs. este identică cu oferta altui participant. Oferta lui va fi examinată prima, deoarece a fost înnaintată mai devreme.',
      'Waiting for the disclosure of the participants\' names': 'Așteptăm dezvăluirea numelor participanților',
      'Unable to place a bid. Check that no more than 2 auctions are simultaneously opened in your browser.': 'Imposibil de înnaintat oferta. Asigrați-vă că nu aveți deschise mai mult de doua licitații în browser-ul Dvs.',
      'Auction has not started and will be rescheduled': 'Licitația nu a început și urmează a fi replanificată.',
      'Please wait for the auction start.': 'Vă rog să așteptați începutul licitației.'
    });


    $translateProvider.translations('ru', {
      'at': 'о',
      'Announcement': 'Объявление результатов',
      'Bid': 'Ставка',
      'Bidder': ' Участник',
      'Bidders': ' Учасники',
      'Bidding': 'Торги',
      'English': 'Английский',
      'Russian': 'Русский',
      'Ukrainian': 'Украинский',
      'Client': 'Клиент',
      'Edit': 'Изменить',
      'Info': 'Информация',
      'Initial bids': 'Первоначальные ставки',
      'Language': 'Язык',
      'Login in as viewer': 'Вход в качестве зрителя',
      'Login': 'Вход',
      'Logout': 'Выйти',
      'Place a bid': 'Сделать ставку',
      'Cancel': 'Отменить',
      'Preliminary bids': 'Предварительные ставки',
      'Round': 'Раунд',
      'Settings': 'Настройки',
      'Time': 'Время',
      'You': 'Вы',
      'All bidders': 'Все участники торгов',
      'Pause': 'Пауза',
      'Results Release': 'Результаты',
      'Waiting': 'Ожидание',
      'or lower': 'или меньше',
      'UAH': 'грн',
      'shortTime': 'HH:mm',
      'Restart sync': 'Перезапуск синхронизации',
      'Too low value': 'Слишком низкая ставка',
      'Too high value': 'Слишком высокая ставка',
      'Not valid bidder': ' Вы не являетесь валидный пользователем',
      'Stage not for bidding': 'Данный этап аукциона не предусматривает приема ставок',
      'Bid placed': 'Ставку принято',
      'Normilized Price': 'Приведённая цена:',
      'Full Price': 'Фактическая цена:',
      'Bidder Coeficient':'Коэффициент:',
      'Your proposal': 'Ваше предложение',
      'Finish': 'Окончен',
      'days': 'дн',
      'hours': 'час',
      'minutes': 'мин',
      'seconds': 'сек',
      'minimum': 'минимум',
      'Internet connection is lost. Attempt to restart after 1 sec': 'Cоединения с интернетом потеряно. попытка перезагрузки через 1 сек',
      'Synchronization failed': 'Ошибка синхронизации',
      'Possible results': 'Возможные результаты',
      'In the room came a new user': 'В кабинет зашел новый пользователь',
      'until the auction starts': 'до начала аукциона',
      'until your turn': 'до вашей очереди',
      'until your turn ends': 'до завершения вашей очереди',
      'until the round starts': 'до начала раунда',
      'until the round ends': ' до окончания раунда',
      'until the results announcement': 'до объявления результатов',
      'Аuction was completed': 'Аукцион закончился',
      'prohibit connection': 'запретить подключение',
      'Step reduction of Bid': 'Шаг уменьшения торгов',
      'Start value': 'Стартовая сумма',
      'Your bid appears too low': 'Вы ввели очень маленькую сумму, вы уверены?',
      'Return to Tender': 'Вернуться к Закупке',
      'Your latest bid': 'Ваша последняя заявка',
      'Tender cancelled': 'Закупка отменена',
      'Bid canceled': 'Ставку отменено',
      'Login is currently closed.': 'Вход на данный момент закрыт.',
      'Please try again later.': 'Попробуйте позже.',
      'Cancel Bid': 'Отменить ставку',
      'Ability to submit bids has been lost. Wait until page reloads, and retry.': 'Потеряна возможность делать заявки. Подождите перезагрузки страницы и попробуйте еще раз.',
      'Ability to submit bids has been lost. Wait until page reloads.': 'Потеряна возможность делать заявки. Подождите перезагрузки страницы.',
      'You are registered as a bidder. Wait for the start of the auction.': 'Вы зарегистрированы как участник. Ожидайте старта аукциона.',
      'You are an observer and cannot bid.': 'Вы наблюдатель и не можете делать ставки.',
      'Your browser is out of date, and this site may not work properly.': 'Ваш браузер устарел, и этот сайт может некорректно работать.',
      'Learn how to update your browser.': 'Узнайте, как обновить Ваш браузер.',
      'Not Found': 'Аукциона по данной Id не найдена',
      'to Mine': 'к Моей',
      'Clear': 'Очистить',
      'to General': 'к Общей',
      'The proposal you have submitted coincides with a proposal of the other participant. His proposal will be considered first, since it has been submitted earlier.': 'Поданное вами предложение совпадает с предложением другого участника. Его предложение будет рассматриваться первым, поскольку оно подано раньше.',
      'Waiting for the disclosure of the participants\' names': 'Ожидаем раскрытия имен участников',
      'Unable to place a bid. Check that no more than 2 auctions are simultaneously opened in your browser.': 'Невозможно сделать ставку. Проверьте, что в браузере открыто не более 2-х аукционов.',
      'Auction has not started and will be rescheduled': 'Аукцион не начался и будет перепланирован',
      'Please wait for the auction start.': 'Пожалуйста, дождитесь начала аукциона.'
    });
  }]);
