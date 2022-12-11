USE longqi;

CREATE TABLE IF NOT EXISTS `user`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `name` VARCHAR(100) NOT NULL,
   `sex` VARCHAR(40) NOT NULL,
   `create_time` TIMESTAMP,
   `state` ENUM('locked', 'battling', 'offline', 'online', 'busy') NOT NULL,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE IF NOT EXISTS `game`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `player1` INT COMMENT 'red side',
   `player2` INT COMMENT 'black side',
   `create_time` TIMESTAMP,
   `state` ENUM('preparing', 'prepared', 'ready', 'running', 'pause', 'done') NOT NULL,
   `result` ENUM('success', 'failure', 'draw'),
   `model` CHAR(255) NOT NULL,
   `step` INT UNSIGNED COMMENT 'game current step number',
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 游戏步骤记录器
CREATE TABLE IF NOT EXISTS `game_recorder`(
   `id` INT UNSIGNED AUTO_INCREMENT,
   `game_id` INT UNSIGNED,
   `user_id` INT UNSIGNED,
   `step` INT UNSIGNED COMMENT 'game current step number',
   `model` CHAR(255) NOT NULL,
   PRIMARY KEY ( `id` )
)ENGINE=InnoDB DEFAULT CHARSET=utf8;


