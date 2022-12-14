StandardError = class StandardError extends Error {
    // constructor(message) {
    //     super(message);
    //     this.name = 'StandardError';
    // }
}
Exception = StandardError
NotImplementedError = class NotImplementedError extends StandardError {}
IgnoreException = class IgnoreException extends StandardError {}
IgnoreException = class IgnoreException extends StandardError {}
InternalError = class InternalError extends StandardError {}
NoMethodError = class NoMethodError extends StandardError {}
NotMatching = class NotMatching extends StandardError {
	constructor(msg) {
		if (!msg)
			msg = "???"
		super(msg)// for debug break
	}
}
DidYouMean = class DidYouMean extends StandardError {}
UnknownCommandError = class UnknownCommandError extends StandardError {}
SecurityError = class SecurityError extends StandardError {}
UnkownType = class UnkownType extends StandardError {}
NotPassing = class NotPassing extends StandardError {}
NoResult = class NoResult extends NotMatching {}
EndOfDocument = class EndOfDocument extends StandardError {}
EndOfLine = class EndOfLine extends NotMatching {}
MaxRecursionReached = class MaxRecursionReached extends StandardError {}
EndOfBlock = class EndOfBlock extends NotMatching {}
GivingUp = class GivingUp extends StandardError {}
ShouldNotMatchKeyword = class ShouldNotMatchKeyword extends NotMatching {}
KeywordNotExpected = class KeywordNotExpected extends NotMatching {}
EndOfStatement = class EndOfStatement extends NotMatching {}
MustNotMatchKeyword = class MustNotMatchKeyword extends NotMatching {}
MethodMissingError = class MethodMissingError extends StandardError {}
WrongType = class WrongType extends StandardError {}
ImmutableVaribale = class ImmutableVaribale extends StandardError {}
SystemStackError = class SystemStackError extends StandardError {}
KeyboardInterrupt = class KeyboardInterrupt extends StandardError {} // TODO
// UndeclaredVariable = class UndeclaredVariable extends NotMatching {}
UndeclaredVariable = class UndeclaredVariable extends StandardError {}

//# sourceMappingURL=exception.js.map
exports = module.exports
module.exports.StandardError = StandardError
exports.InternalError = InternalError
exports.NoMethodError = NoMethodError
exports.UndeclaredVariable = UndeclaredVariable
exports.DidYouMean = DidYouMean
exports.UnknownCommandError = UnknownCommandError
exports.SecurityError = SecurityError
exports.UnkownType = UnkownType
exports.NotPassing = NotPassing
exports.NoResult = NoResult
exports.EndOfDocument = EndOfDocument
exports.EndOfLine = EndOfLine
exports.MaxRecursionReached = MaxRecursionReached
exports.EndOfBlock = EndOfBlock
exports.GivingUp = GivingUp
exports.ShouldNotMatchKeyword = ShouldNotMatchKeyword
exports.KeywordNotExpected = KeywordNotExpected
exports.EndOfStatement = EndOfStatement
exports.MustNotMatchKeyword = MustNotMatchKeyword
exports.MethodMissingError = MethodMissingError
exports.WrongType = WrongType
exports.ImmutableVaribale = ImmutableVaribale
exports.SystemStackError = SystemStackError
exports.NotMatching = NotMatching
exports.IgnoreException = IgnoreException
