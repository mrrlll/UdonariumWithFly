/* Generated by Opal 0.11.4 */
(function(Opal) {
  function $rb_plus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs + rhs : lhs['$+'](rhs);
  }
  function $rb_gt(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs > rhs : lhs['$>'](rhs);
  }
  function $rb_minus(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs - rhs : lhs['$-'](rhs);
  }
  function $rb_ge(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs >= rhs : lhs['$>='](rhs);
  }
  function $rb_le(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs <= rhs : lhs['$<='](rhs);
  }
  function $rb_times(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs * rhs : lhs['$*'](rhs);
  }
  function $rb_divide(lhs, rhs) {
    return (typeof(lhs) === 'number' && typeof(rhs) === 'number') ? lhs / rhs : lhs['$/'](rhs);
  }
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice, $klass = Opal.klass, $send = Opal.send, $truthy = Opal.truthy, $hash2 = Opal.hash2;

  Opal.add_stubs(['$debug', '$judgeRoll', '$nil?', '$reRoll', '$getRulingPlanetDiceCommandResult', '$getDurtyTableCommandReuslt', '$getTableCommandResult', '$=~', '$!', '$last_match', '$to_i', '$+', '$getRollResult', '$getTotalResultMessageText', '$collect', '$split', '$each', '$empty?', '$>', '$size', '$each_with_index', '$==', '$-', '$roll', '$getSuccessResultText', '$find_all', '$>=', '$<<', '$getSameDieList', '$join', '$count', '$inject', '$uniq', '$<=', '$length', '$===', '$getRulingPlanetDice', '$include?', '$changeRulingPlanetDice', '$*', '$ceil', '$/', '$[]', '$setPrefixes', '$keys']);
  return (function($base, $super, $parent_nesting) {
    function $BlindMythos(){};
    var self = $BlindMythos = $klass($base, $super, 'BlindMythos', $BlindMythos);

    var def = self.$$proto, $nesting = [self].concat($parent_nesting), TMP_BlindMythos_initialize_1, TMP_BlindMythos_gameName_2, TMP_BlindMythos_gameType_3, TMP_BlindMythos_getHelpMessage_4, TMP_BlindMythos_rollDiceCommand_5, TMP_BlindMythos_judgeRoll_6, TMP_BlindMythos_reRoll_9, TMP_BlindMythos_getRollResult_15, TMP_BlindMythos_getTotalResultMessageText_18, TMP_BlindMythos_getSameDieList_21, TMP_BlindMythos_getSuccessResultText_23, TMP_BlindMythos_getRulingPlanetDiceCommandResult_26, TMP_BlindMythos_getRulingPlanetDice_27, TMP_BlindMythos_changeRulingPlanetDice_28, TMP_BlindMythos_getDurtyTableCommandReuslt_29, $a;

    
    
    Opal.defn(self, '$initialize', TMP_BlindMythos_initialize_1 = function $$initialize() {
      var self = this, $iter = TMP_BlindMythos_initialize_1.$$p, $yield = $iter || nil, $zuper = nil, $zuper_i = nil, $zuper_ii = nil;

      if ($iter) TMP_BlindMythos_initialize_1.$$p = null;
      // Prepare super implicit arguments
      for($zuper_i = 0, $zuper_ii = arguments.length, $zuper = new Array($zuper_ii); $zuper_i < $zuper_ii; $zuper_i++) {
        $zuper[$zuper_i] = arguments[$zuper_i];
      }
      return $send(self, Opal.find_super_dispatcher(self, 'initialize', TMP_BlindMythos_initialize_1, false), $zuper, $iter)
    }, TMP_BlindMythos_initialize_1.$$arity = 0);
    
    Opal.defn(self, '$gameName', TMP_BlindMythos_gameName_2 = function $$gameName() {
      var self = this;

      return "ブラインド・ミトス"
    }, TMP_BlindMythos_gameName_2.$$arity = 0);
    
    Opal.defn(self, '$gameType', TMP_BlindMythos_gameType_3 = function $$gameType() {
      var self = this;

      return "BlindMythos"
    }, TMP_BlindMythos_gameType_3.$$arity = 0);
    
    Opal.defn(self, '$getHelpMessage', TMP_BlindMythos_getHelpMessage_4 = function $$getHelpMessage() {
      var self = this;

      return "" + "・判定：BMx@y>=z、BMSx@y>=z\n" + "  　x:スキルレベル\n" + "　　y:目標難易度（省略可。デフォルト4）\n" + "　　z:必要成功度\n" + "　BMコマンドはダイスの振り足しを常に行い、\n" + "　BMSは振り足しを自動では行いません。\n" + " 例）BM>=1　BM@3>=1　BMS2>=1\n" + "\n" + "・判定振り足し：ReRollx,x,x...@y>=1\n" + "  　x:振るダイスの個数\n" + "　　y:目標難易度（省略可。デフォルト4）\n" + "　　z:必要成功度\n" + "　振り足しを自動で行わない場合（BMSコマンド）に使用します。\n" + "\n" + "・LE：失う感情表\n" + "・感情後遺症表 ESx\n" + "　ESH：喜、ESA：怒、ESS：哀、ESP：楽、ESL：愛、ESE：感\n" + "・DT：汚染チャート\n" + "・RPxyz：守護星表チェック\n" + " xyz:守護星ナンバーを指定\n" + " 例）RP123　RP258\n"
    }, TMP_BlindMythos_getHelpMessage_4.$$arity = 0);
    
    Opal.defn(self, '$rollDiceCommand', TMP_BlindMythos_rollDiceCommand_5 = function $$rollDiceCommand(command) {
      var $a, $b, self = this, text = nil, isStop = nil;

      
      self.$debug("rollDiceCommand Begin");
      text = self.$judgeRoll(command);
      if ($truthy(text['$nil?']())) {
        } else {
        return text
      };
      isStop = true;
      $b = self.$reRoll(command, isStop), $a = Opal.to_ary($b), (text = ($a[0] == null ? nil : $a[0])), $b;
      if ($truthy(text['$nil?']())) {
        } else {
        return text
      };
      text = self.$getRulingPlanetDiceCommandResult(command);
      if ($truthy(text['$nil?']())) {
        } else {
        return text
      };
      text = self.$getDurtyTableCommandReuslt(command);
      if ($truthy(text['$nil?']())) {
        } else {
        return text
      };
      text = self.$getTableCommandResult(command, (($a = $BlindMythos.$$cvars['@@tables']) == null ? nil : $a));
      return text;
    }, TMP_BlindMythos_rollDiceCommand_5.$$arity = 1);
    
    Opal.defn(self, '$judgeRoll', TMP_BlindMythos_judgeRoll_6 = function $$judgeRoll(command) {
      var $a, $b, self = this, isStop = nil, skillRank = nil, judgeNumberText = nil, judgeNumber = nil, targetNumber = nil, message = nil, diceCount = nil, isReRoll = nil, text = nil, bitList = nil, successList = nil, countOneList = nil, canReRoll = nil;

      
      if ($truthy(/^BM(S)?(\d*)(@(\d+))?>=(\d+)$/i['$=~'](command))) {
        } else {
        return nil
      };
      isStop = Opal.const_get_relative($nesting, 'Regexp').$last_match(1)['$nil?']()['$!']();
      skillRank = Opal.const_get_relative($nesting, 'Regexp').$last_match(2).$to_i();
      judgeNumberText = Opal.const_get_relative($nesting, 'Regexp').$last_match(3);
      judgeNumber = ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(4)) ? $a : 4).$to_i();
      targetNumber = ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(5)) ? $a : 1).$to_i();
      message = "";
      diceCount = $rb_plus(skillRank, 2);
      isReRoll = false;
      $b = self.$getRollResult([diceCount], judgeNumberText, judgeNumber, targetNumber, isReRoll, isStop), $a = Opal.to_ary($b), (text = ($a[0] == null ? nil : $a[0])), (bitList = ($a[1] == null ? nil : $a[1])), (successList = ($a[2] == null ? nil : $a[2])), (countOneList = ($a[3] == null ? nil : $a[3])), (canReRoll = ($a[4] == null ? nil : $a[4])), $b;
      message = $rb_plus(message, text);
      message = $rb_plus(message, self.$getTotalResultMessageText(bitList, successList, countOneList, targetNumber, isStop, canReRoll));
      return message;
    }, TMP_BlindMythos_judgeRoll_6.$$arity = 1);
    
    Opal.defn(self, '$reRoll', TMP_BlindMythos_reRoll_9 = function $$reRoll(command, isStop) {
      var $a, TMP_7, TMP_8, $b, self = this, rerollCountsText = nil, judgeNumberText = nil, judgeNumber = nil, targetNumber = nil, rerollCounts = nil, commandText = nil, message = nil, isReRoll = nil, text = nil, _bitList = nil, successList = nil, countOneList = nil;

      
      self.$debug("ReRoll Begin", command);
      if ($truthy(/^ReRoll([\d,]+)(@(\d+))?>=(\d+)$/i['$=~'](command))) {
        } else {
        return nil
      };
      self.$debug("ReRoll pass");
      rerollCountsText = Opal.const_get_relative($nesting, 'Regexp').$last_match(1);
      judgeNumberText = Opal.const_get_relative($nesting, 'Regexp').$last_match(2);
      judgeNumber = ($truthy($a = Opal.const_get_relative($nesting, 'Regexp').$last_match(3)) ? $a : 4).$to_i();
      targetNumber = Opal.const_get_relative($nesting, 'Regexp').$last_match(4).$to_i();
      rerollCounts = $send(rerollCountsText.$split(/,/), 'collect', [], (TMP_7 = function(i){var self = TMP_7.$$s || this;
if (i == null) i = nil;
      return i.$to_i()}, TMP_7.$$s = self, TMP_7.$$arity = 1, TMP_7));
      commandText = "";
      $send(rerollCounts, 'each', [], (TMP_8 = function(diceCount){var self = TMP_8.$$s || this;
if (diceCount == null) diceCount = nil;
      
        if ($truthy(commandText['$empty?']())) {
          } else {
          commandText = $rb_plus(commandText, ",")
        };
        return (commandText = $rb_plus(commandText, "" + "ReRoll" + (diceCount) + (judgeNumberText) + ">=" + (targetNumber)));}, TMP_8.$$s = self, TMP_8.$$arity = 1, TMP_8));
      self.$debug("commandText", commandText);
      message = "";
      if ($truthy($rb_gt(rerollCounts.$size(), 1))) {
        if ($truthy(isStop)) {
          message = $rb_plus(message, "" + "(" + (commandText) + ")")}};
      message = $rb_plus(message, "\n");
      isReRoll = true;
      $b = self.$getRollResult(rerollCounts, judgeNumberText, judgeNumber, targetNumber, isReRoll, isStop), $a = Opal.to_ary($b), (text = ($a[0] == null ? nil : $a[0])), (_bitList = ($a[1] == null ? nil : $a[1])), (successList = ($a[2] == null ? nil : $a[2])), (countOneList = ($a[3] == null ? nil : $a[3])), $b;
      message = $rb_plus(message, text);
      return [message, successList, countOneList, targetNumber];
    }, TMP_BlindMythos_reRoll_9.$$arity = 2);
    
    Opal.defn(self, '$getRollResult', TMP_BlindMythos_getRollResult_15 = function $$getRollResult(rerollCounts, judgeNumberText, judgeNumber, targetNumber, isReRoll, isStop) {
      var TMP_10, $a, $b, self = this, bitList = nil, successList = nil, countOneList = nil, rerollTargetList = nil, message = nil, rerollCommand = nil, canReRoll = nil, text = nil, successListTmp = nil, countOneListTmp = nil;

      
      bitList = [];
      successList = [];
      countOneList = [];
      rerollTargetList = [];
      message = "";
      $send(rerollCounts, 'each_with_index', [], (TMP_10 = function(diceCount, index){var self = TMP_10.$$s || this, $a, $b, TMP_11, TMP_12, TMP_13, TMP_14, commandName = nil, commandText = nil, isSort = nil, _ = nil, diceText = nil, diceList = nil, success = nil, countOne = nil, resultText = nil, sameDiceList = nil, rerollText = nil;
if (diceCount == null) diceCount = nil;if (index == null) index = nil;
      
        if (index['$=='](0)) {
          } else {
          message = $rb_plus(message, "\n")
        };
        commandName = "" + "ReRoll" + (diceCount);
        if ($truthy(isReRoll)) {
        } else if ($truthy(isStop)) {
          commandName = "" + "BMS" + ($rb_minus(diceCount, 2))
          } else {
          commandName = "" + "BM" + ($rb_minus(diceCount, 2))
        };
        commandText = "" + (commandName) + (judgeNumberText) + ">=" + (targetNumber);
        isSort = 1;
        $b = self.$roll(diceCount, 6, isSort), $a = Opal.to_ary($b), (_ = ($a[0] == null ? nil : $a[0])), (diceText = ($a[1] == null ? nil : $a[1])), $b;
        diceList = $send(diceText.$split(/,/), 'collect', [], (TMP_11 = function(i){var self = TMP_11.$$s || this;
if (i == null) i = nil;
        return i.$to_i()}, TMP_11.$$s = self, TMP_11.$$arity = 1, TMP_11));
        if ($truthy(isReRoll)) {
          message = $rb_plus(message, " ＞ ")};
        message = $rb_plus(message, "" + "(" + (commandText) + ") ＞ " + (diceCount) + "D6[" + (diceText) + "] ＞ ");
        $b = self.$getSuccessResultText(diceList, judgeNumber), $a = Opal.to_ary($b), (success = ($a[0] == null ? nil : $a[0])), (countOne = ($a[1] == null ? nil : $a[1])), (resultText = ($a[2] == null ? nil : $a[2])), $b;
        if ($truthy(isReRoll)) {
          } else {
          bitList = $rb_plus(bitList, $send(diceList, 'find_all', [], (TMP_12 = function(i){var self = TMP_12.$$s || this;
if (i == null) i = nil;
          return $rb_ge(i, 4)}, TMP_12.$$s = self, TMP_12.$$arity = 1, TMP_12)))
        };
        successList['$<<'](success);
        countOneList['$<<'](countOne);
        message = $rb_plus(message, resultText);
        sameDiceList = self.$getSameDieList(diceList);
        if ($truthy(sameDiceList['$empty?']())) {
          return nil;};
        rerollText = "";
        $send(sameDiceList, 'each', [], (TMP_13 = function(list){var self = TMP_13.$$s || this;
if (list == null) list = nil;
        
          if ($truthy(rerollText['$empty?']())) {
            } else {
            rerollText = $rb_plus(rerollText, ",")
          };
          return (rerollText = $rb_plus(rerollText, list.$join("")));}, TMP_13.$$s = self, TMP_13.$$arity = 1, TMP_13));
        rerollTargetList['$<<']($send(sameDiceList, 'collect', [], (TMP_14 = function(i){var self = TMP_14.$$s || this;
if (i == null) i = nil;
        return i.$count()}, TMP_14.$$s = self, TMP_14.$$arity = 1, TMP_14)).$join(","));
        return (message = $rb_plus(message, "" + "、リロール[" + (rerollText) + "]"));}, TMP_10.$$s = self, TMP_10.$$arity = 2, TMP_10));
      rerollCommand = "";
      if ($truthy(rerollTargetList['$empty?']())) {
        } else {
        
        rerollCommand = "" + "ReRoll" + (rerollTargetList.$join(",")) + (judgeNumberText) + ">=" + (targetNumber);
        if ($truthy(isStop)) {
          message = $rb_plus(message, "" + "\n ＞ コマンド：" + (rerollCommand))};
      };
      canReRoll = rerollCommand['$empty?']()['$!']();
      if ($truthy(canReRoll)) {
        if ($truthy(isStop)) {
          } else {
          
          $b = self.$reRoll(rerollCommand, isStop), $a = Opal.to_ary($b), (text = ($a[0] == null ? nil : $a[0])), (successListTmp = ($a[1] == null ? nil : $a[1])), (countOneListTmp = ($a[2] == null ? nil : $a[2])), $b;
          message = $rb_plus(message, text);
          successList = $rb_plus(successList, successListTmp);
          countOneList = $rb_plus(countOneList, countOneListTmp);
        }};
      return [message, bitList, successList, countOneList, canReRoll];
    }, TMP_BlindMythos_getRollResult_15.$$arity = 6);
    
    Opal.defn(self, '$getTotalResultMessageText', TMP_BlindMythos_getTotalResultMessageText_18 = function $$getTotalResultMessageText(bitList, successList, countOneList, targetNumber, isStop, canReRoll) {
      var TMP_16, TMP_17, $a, self = this, success = nil, countOne = nil, result = nil;

      
      success = $send(successList, 'inject', [], (TMP_16 = function(sum, i){var self = TMP_16.$$s || this;
if (sum == null) sum = nil;if (i == null) i = nil;
      return $rb_plus(sum, i)}, TMP_16.$$s = self, TMP_16.$$arity = 2, TMP_16));
      countOne = $send(countOneList, 'inject', [], (TMP_17 = function(sum, i){var self = TMP_17.$$s || this;
if (sum == null) sum = nil;if (i == null) i = nil;
      return $rb_plus(sum, i)}, TMP_17.$$s = self, TMP_17.$$arity = 2, TMP_17));
      result = "";
      if ($truthy($rb_gt(successList.$size(), 1))) {
        result = $rb_plus(result, "" + "\n ＞ 最終成功数:" + (success))};
      if ($truthy(($truthy($a = canReRoll) ? isStop : $a))) {
        
        result = $rb_plus(result, "\n");
        if ($truthy($rb_ge(success, targetNumber))) {
          result = $rb_plus(result, " ＞ 現状で成功。コマンド実行で追加リロールも可能")
          } else {
          
          result = $rb_plus(result, " ＞ 現状のままでは失敗");
          if ($truthy($rb_ge(countOne, 1))) {
            result = $rb_plus(result, "" + "。汚染ポイント+" + (countOne))};
        };
        return result;};
      if ($truthy($rb_ge(success, targetNumber))) {
        
        result = $rb_plus(result, " ＞ 成功");
        if ($truthy($rb_ge(bitList.$size(), 1))) {
          result = $rb_plus(result, "" + "、禁書ビット発生[" + (bitList.$join(",")) + "]")};
        } else {
        
        result = $rb_plus(result, " ＞ 失敗");
        if ($truthy($rb_ge(countOne, 1))) {
          result = $rb_plus(result, "" + "。汚染ポイント+" + (countOne))};
      };
      return result;
    }, TMP_BlindMythos_getTotalResultMessageText_18.$$arity = 6);
    
    Opal.defn(self, '$getSameDieList', TMP_BlindMythos_getSameDieList_21 = function $$getSameDieList(diceList) {
      var TMP_19, self = this, sameDiceList = nil;

      
      sameDiceList = [];
      $send(diceList.$uniq(), 'each', [], (TMP_19 = function(i){var self = TMP_19.$$s || this, TMP_20, list = nil;
if (i == null) i = nil;
      
        if (i['$=='](1)) {
          return nil;};
        list = $send(diceList, 'find_all', [], (TMP_20 = function(dice){var self = TMP_20.$$s || this;
if (dice == null) dice = nil;
        return dice['$=='](i)}, TMP_20.$$s = self, TMP_20.$$arity = 1, TMP_20));
        if ($truthy($rb_le(list.$length(), 1))) {
          return nil;};
        return sameDiceList['$<<'](list);}, TMP_19.$$s = self, TMP_19.$$arity = 1, TMP_19));
      return sameDiceList;
    }, TMP_BlindMythos_getSameDieList_21.$$arity = 1);
    
    Opal.defn(self, '$getSuccessResultText', TMP_BlindMythos_getSuccessResultText_23 = function $$getSuccessResultText(diceList, judgeNumber) {
      var TMP_22, self = this, success = nil, countOne = nil, result = nil;

      
      success = 0;
      countOne = 0;
      $send(diceList, 'each', [], (TMP_22 = function(i){var self = TMP_22.$$s || this;
if (i == null) i = nil;
      
        if (i['$=='](1)) {
          countOne = $rb_plus(countOne, 1)};
        if ($truthy($rb_ge(i, judgeNumber))) {
          } else {
          return nil;
        };
        return (success = $rb_plus(success, 1));}, TMP_22.$$s = self, TMP_22.$$arity = 1, TMP_22));
      result = "" + "成功数:" + (success);
      return [success, countOne, result];
    }, TMP_BlindMythos_getSuccessResultText_23.$$arity = 2);
    
    Opal.defn(self, '$getRulingPlanetDiceCommandResult', TMP_BlindMythos_getRulingPlanetDiceCommandResult_26 = function $$getRulingPlanetDiceCommandResult(command) {
      var TMP_24, TMP_25, self = this, targetNumbers = nil, diceList = nil, matchResult = nil, text = nil;

      
      if ($truthy(/^RP(\d+)/i['$==='](command))) {
        } else {
        return nil
      };
      targetNumbers = $send(Opal.const_get_relative($nesting, 'Regexp').$last_match(1).$split(/(?:)/), 'collect', [], (TMP_24 = function(i){var self = TMP_24.$$s || this;
if (i == null) i = nil;
      return i.$to_i()}, TMP_24.$$s = self, TMP_24.$$arity = 1, TMP_24));
      diceList = self.$getRulingPlanetDice();
      matchResult = "失敗";
      (function(){var $brk = Opal.new_brk(); try {return $send(targetNumbers, 'each', [], (TMP_25 = function(i){var self = TMP_25.$$s || this;
if (i == null) i = nil;
      if ($truthy(diceList['$include?'](i))) {
          
          matchResult = "発動";
          
          Opal.brk(nil, $brk);
          } else {
          return nil
        }}, TMP_25.$$s = self, TMP_25.$$brk = $brk, TMP_25.$$arity = 1, TMP_25))
      } catch (err) { if (err === $brk) { return err.$v } else { throw err } }})();
      text = "" + "守護星表チェック(" + (targetNumbers.$join(",")) + ") ＞ " + (diceList.$count()) + "D10[" + (diceList.$join(",")) + "] ＞ " + (matchResult);
      return text;
    }, TMP_BlindMythos_getRulingPlanetDiceCommandResult_26.$$arity = 1);
    
    Opal.defn(self, '$getRulingPlanetDice', TMP_BlindMythos_getRulingPlanetDice_27 = function $$getRulingPlanetDice() {
      var $a, $b, $c, self = this, dice1 = nil, dice2 = nil;

      
      $b = self.$roll(1, 10), $a = Opal.to_ary($b), (dice1 = ($a[0] == null ? nil : $a[0])), $b;
      dice2 = dice1;
      while (dice1['$=='](dice2)) {
        $c = self.$roll(1, 10), $b = Opal.to_ary($c), (dice2 = ($b[0] == null ? nil : $b[0])), $c
      };
      dice1 = self.$changeRulingPlanetDice(dice1);
      dice2 = self.$changeRulingPlanetDice(dice2);
      return [dice1, dice2];
    }, TMP_BlindMythos_getRulingPlanetDice_27.$$arity = 0);
    
    Opal.defn(self, '$changeRulingPlanetDice', TMP_BlindMythos_changeRulingPlanetDice_28 = function $$changeRulingPlanetDice(dice) {
      var self = this;

      
      if (dice['$=='](10)) {
        return 0};
      return dice;
    }, TMP_BlindMythos_changeRulingPlanetDice_28.$$arity = 1);
    
    Opal.defn(self, '$getDurtyTableCommandReuslt', TMP_BlindMythos_getDurtyTableCommandReuslt_29 = function $$getDurtyTableCommandReuslt(command) {
      var $a, $b, self = this, table = nil, dice1 = nil, dice2 = nil, index = nil;

      
      if ($truthy(/^DT$/i['$=~'](command))) {
        } else {
        return nil
      };
      table = "" + "汚染チャートを２回振り、その効果を適用する（1・2-2,5・6-12 なら振り直す）\n" + "ＰＣ全員の「トラウマ」「喪失」すべてに２ダメージ\n" + "ＰＣ全員の「喪失」２つに４ダメージ\n" + "ＰＣ全員の「トラウマ」すべてに２ダメージ。その後さらに汚染が２増える\n" + "ＰＣ全員、１つの【記憶】の両方の値が０になる。このときアクロバットダイス獲得不可\n" + "ＰＣ全員の「喪失」１つに４ダメージ。このときアクロバットダイス獲得不可\n" + "ＰＣ全員の「トラウマ」すべてに１ダメージ。その後さらに汚染が３増える\n" + "ＰＣ全員の「トラウマ」すべてに１ダメージ。その後アクロバットダイスをＰＣ人数分失う\n" + "ＰＣ全員の「喪失」すべてに２ダメージ。禁書ビットをすべて失う\n" + "ＰＣ全員の「トラウマ」２つに３ダメージ。その後さらに汚染が１増える\n" + "ＰＣ全員の「トラウマ」「喪失」すべてに１ダメージ\n" + "ＰＣ全員の「喪失」１つに４ダメージ。禁書ビットをすべて失う\n" + "ＰＣ全員の「トラウマ」すべてに２ダメージ\n" + "ＰＣ全員の１つの【記憶】の「トラウマ」「喪失」それぞれに３ダメージ\n" + "ＰＣ全員の「喪失」すべてに１ダメージ\n" + "ＰＣ全員の「トラウマ」３つに２ダメージ\n" + "ＰＣ全員の「トラウマ」と「喪失」それぞれ１つに３ダメージ\n" + "ＰＣ全員の「喪失」３つに２ダメージ\n" + "ＰＣ全員のすべての「トラウマ」に1 ダメージ\n" + "ＰＣ全員のひとつの【記憶】の「トラウマ」「喪失」それぞれに３ダメージ\n" + "ＰＣ全員の「喪失」すべてに２ダメージ\n" + "ＰＣ全員の「トラウマ」ひとつに４ダメージ。禁書ビットをすべて失う\n" + "ＰＣ全員の「トラウマ」「喪失」すべてに１ダメージ\n" + "ＰＣ全員の「喪失」２つに３ダメージ。その後さらに汚染が１増える\n" + "ＰＣ全員の「トラウマ」すべてに２ダメージ。禁書ビットをすべて失う\n" + "ＰＣ全員の「喪失」すべてに１ダメージ。その後アクロバットダイスをＰＣ人数分失う\n" + "ＰＣ全員の「喪失」すべてに１ダメージ。その後さらに汚染が３増える\n" + "ＰＣ全員の「トラウマ」１つに４ダメージ。このときアクロバットダイス獲得不可\n" + "ＰＣ全員、１つの【記憶】の両方の値が０になる。このときアクロバットダイス獲得不可\n" + "ＰＣ全員の「喪失」すべてに２ダメージ。その後さらに汚染が２増える\n" + "ＰＣ全員の「トラウマ」２つに４ダメージ\n" + "ＰＣ全員の「トラウマ」「喪失」すべてに２ダメージ\n" + "汚染チャートを２回振り、その効果を適用する（1・2-2,5・6-12 なら振り直す）\n";
      table = table.$split("\n");
      $b = self.$roll(1, 6), $a = Opal.to_ary($b), (dice1 = ($a[0] == null ? nil : $a[0])), $b;
      $b = self.$roll(2, 6), $a = Opal.to_ary($b), (dice2 = ($a[0] == null ? nil : $a[0])), $b;
      index = $rb_minus($rb_plus($rb_times($rb_minus(dice2, 2), 3), $rb_divide(dice1, 2.0).$ceil()), 1);
      return "" + "汚染チャート(" + (dice1) + "," + (dice2) + ") ＞ " + (table['$[]'](index));
    }, TMP_BlindMythos_getDurtyTableCommandReuslt_29.$$arity = 1);
    (Opal.class_variable_set($BlindMythos, '@@tables', $hash2(["LE", "ESH", "ESA", "ESS", "ESP", "ESL", "ESE"], {"LE": $hash2(["name", "type", "table"], {"name": "失う感情表", "type": "1D6", "table": ["喜：喜びは消えた。嬉しい気持ちとは、なんだっただろう。", "怒：激情は失われ、憎しみもどこかへと消える。", "哀：どんなに辛くても、悲しさを感じない。どうやら涙も涸れたらしい。", "楽：もはや楽しいことなどない。希望を抱くだけ無駄なのだ。", "愛：愛など幻想……無力で儚い、役に立たない世迷い言だ。", "感：なにを見ても、感動はない。心は凍てついている。"]}), "ESH": $hash2(["name", "type", "table"], {"name": "「喜」の感情後遺症表", "type": "2D6", "table": ["日々喜びを求めてしまう。", "日々喜びを求めてしまう。", "嬉しい時間が長続きしない。", "素直に喜びを共有できないことがある。", "小さなことで大きく喜びを感じる。", "小さなことで大きく喜びを感じる。", "影響なし。", "影響なし。", "「喜」の後遺症をひとつ消してもよい。", "「喜」の後遺症をひとつ消してもよい。", "「喜」の後遺症をひとつ消してもよい。"]}), "ESA": $hash2(["name", "type", "table"], {"name": "「怒」の感情後遺症表", "type": "2D6", "table": ["始終不機嫌になる。", "始終不機嫌になる。", "一度怒ると、なかなか収まらない。", "怒りっぽくなる", "怒りかたが激しくなる。", "怒りかたが激しくなる。", "影響なし。", "影響なし。", "「怒」の後遺症をひとつ消してもよい。", "「怒」の後遺症をひとつ消してもよい。", "「怒」の後遺症をひとつ消してもよい。"]}), "ESS": $hash2(["name", "type", "table"], {"name": "「哀」の感情後遺症表", "type": "2D6", "table": ["一度涙が出るとなかなか止まらない。", "一度涙が出るとなかなか止まらない。", "夜、哀しいことを思い出して目が覚める。", "不意に哀しい気持ちになる。", "涙もろくなる。", "涙もろくなる。", "影響なし。", "影響なし。", "「哀」の後遺症をひとつ消してもよい。", "「哀」の後遺症をひとつ消してもよい。", "「哀」の後遺症をひとつ消してもよい。"]}), "ESP": $hash2(["name", "type", "table"], {"name": "「楽」の感情後遺症表", "type": "2D6", "table": ["突然陽気になったり、不意に笑い出してしまう。", "突然陽気になったり、不意に笑い出してしまう。", "周りが楽しくなさそうだと不安になる。", "楽しいことがないと落ち着かない。", "些細なことでも笑ってしまう。", "些細なことでも笑ってしまう。", "影響なし。", "影響なし。", "「楽」の後遺症をひとつ消してもよい。", "「楽」の後遺症をひとつ消してもよい。", "「楽」の後遺症をひとつ消してもよい。"]}), "ESL": $hash2(["name", "type", "table"], {"name": "「愛」の感情後遺症表", "type": "2D6", "table": ["少しでも気になる相手に愛を求めてしまう。", "少しでも気になる相手に愛を求めてしまう。", "愛する相手（恋人・家族・ペット・空想）から離れたくない。", "誰彼構わず優しくしてしまう。", "ひとりでいると不安を感じる。", "ひとりでいると不安を感じる。", "影響なし。", "影響なし。", "「愛」の後遺症をひとつ消してもよい。", "「愛」の後遺症をひとつ消してもよい。", "「愛」の後遺症をひとつ消してもよい。"]}), "ESE": $hash2(["name", "type", "table"], {"name": "「感」の感情後遺症表", "type": "2D6", "table": ["感動を共有できない相手を不信に思ってしまう。", "感動を共有できない相手を不信に思ってしまう。", "嬉しくても哀しくてもすぐに涙が出る。", "リアクションがオーバーになる。", "ちょっとしたことで感動する。", "ちょっとしたことで感動する。", "影響なし。", "影響なし。", "「感」の後遺症をひとつ消してもよい。", "「感」の後遺症をひとつ消してもよい。", "「感」の後遺症をひとつ消してもよい。"]})})));
    return self.$setPrefixes($rb_plus(["BM.*", "ReRoll\\d+.*", "RP\\d+", "DT"], (($a = $BlindMythos.$$cvars['@@tables']) == null ? nil : $a).$keys()));
  })($nesting[0], Opal.const_get_relative($nesting, 'DiceBot'), $nesting)
})(Opal);

/* Generated by Opal 0.11.4 */
(function(Opal) {
  var self = Opal.top, $nesting = [], nil = Opal.nil, $breaker = Opal.breaker, $slice = Opal.slice;

  Opal.add_stubs(['$exit']);
  return Opal.const_get_relative($nesting, 'Kernel').$exit()
})(Opal);
